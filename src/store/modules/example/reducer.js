import * as types from '../types';

const initialState = {
  clickedButton: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log('SUCCESS!!!');
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    case types.CLICKED_BUTTON_FAILURE: {
      console.log('FAILURE...');
      return state;
    }

    case types.CLICKED_BUTTON_REQUEST: {
      console.log('REQUESTING...');
      return state;
    }

    default:
      return state;
  }
}
