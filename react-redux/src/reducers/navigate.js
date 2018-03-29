import { SIGN_IN } from '../constants/ActionTypes';

const initialState = {

};

export default function navigate(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {

      };
    default:
      return state;
  }
}
