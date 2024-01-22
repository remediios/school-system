import * as types from '../types';

const initialState = {
  isLogged: false,
  token: false,
  user: {},
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.SIGNIN_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }
    case types.SIGNIN_SUCCESS: {
      const newState = {
        ...state,
        isLogged: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false,
      };
      return newState;
    }
    case types.SIGNIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default:
      return state;
  }
}
