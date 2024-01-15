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
