import { loginApi } from "../services/api";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const receiveLogin = (creds) => async (dispatch) => {
  const { data } = await loginApi(creds);
  if (data?.success) {
    sessionStorage.setItem('user', JSON.stringify(creds));
    sessionStorage.setItem('authenticated', true)
    dispatch({ type: LOGIN_SUCCESS })
  }
  else dispatch({
    type: LOGIN_FAILURE, payload: 'Something was wrong. Try again',
  })
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('user')
    dispatch(receiveLogout());
  };
}

export function loginUser(creds) {
  return (dispatch) => {
    if (creds.evergreenId.length > 0 && creds.password.length > 0) {
      dispatch(receiveLogin(creds));
    } else {
      dispatch(loginError('Something was wrong. Try again'));
    }
  }
}

