import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* signInRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    const { data } = response;
    yield put(actions.signInSuccess({ ...data }));

    toast.success('Successfully signed in');

    axios.defaults.headers.Authorization = `Bearer ${data.token}`;
    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Invalid user or password');
    yield put(actions.signInFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, name, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        name,
        email,
        password: password || undefined,
      });
      toast.success('Account details successfully updated');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
    } else {
      yield call(axios.post, '/users', {
        name,
        email,
        password,
      });
      toast.success('Account successfully created');
      yield put(actions.registerCreatedSuccess({ name, email, password }));
      history.push('/sign-in');
    }
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', 0);

    if (status === 401) {
      toast.error('Please sign-in again...');
      yield put(actions.signInFailure());
      return history.push('/sign-in');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Unknown error');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.SIGNIN_REQUEST, signInRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
