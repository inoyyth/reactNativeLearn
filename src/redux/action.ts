export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_AGE = 'SET_AGE';
export const SET_EMAIL = 'SET_EMAIL';

export const setName = (name: any) => (dispatch: any) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setAge = (age: any) => (dispatch: any) => {
  dispatch({
    type: SET_AGE,
    payload: age,
  });
};

export const setEmail = (email: any) => (dispatch: any) => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
};
