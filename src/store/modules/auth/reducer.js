import * as types from '../types';
import axios from '../../../services/axios';

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
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }
    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
        },
        isLoading: false,
      };
      return newState;
    }
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = {
        ...state,
        isLoading: false,
      };
      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = {
        ...state,
        isLoading: false,
      };
      return newState;
    }

    default:
      return state;
  }
}
