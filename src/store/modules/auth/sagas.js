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

export default all([
  takeLatest(types.SIGNIN_REQUEST, signInRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
