import {SET_USER_NAME, SET_AGE, SET_EMAIL} from './action';

const initialState = {
  name: '',
  age: 0,
  email: '',
};

function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
