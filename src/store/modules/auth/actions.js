import * as types from '../types';

export function signInRequest(payload) {
  return { type: types.SIGNIN_REQUEST, payload };
}

export function signInSuccess(payload) {
  return { type: types.SIGNIN_SUCCESS, payload };
}

export function signInFailure(payload) {
  return { type: types.SIGNIN_FAILURE, payload };
}

export function registerRequest(payload) {
  return { type: types.REGISTER_REQUEST, payload };
}

export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS,
    payload,
  };
}

export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return { type: types.REGISTER_FAILURE, payload };
}
