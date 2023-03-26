import { toast } from 'react-toastify';
import { registerApi } from '../services/api';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const receiveRegister = (info) => async (dispatch) => {
  console.log({ creds: info.creds })
  const { data } = await registerApi(info.creds)
  if (data?.success) {
    sessionStorage.setItem('user', JSON.stringify({ evergreenId: data.evergreenId || '' }));
    info?.history?.push('/login');
    dispatch({ type: REGISTER_SUCCESS, history: info.history });
  }
  else dispatch({
    type: REGISTER_FAILURE, payload: 'Something was wrong. Try again',
  })
}

export function registerError(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}

export function registerUser(payload) {
  console.log({payload})
  return (dispatch) => {
    if (payload.creds.email.length > 0 && payload.creds.password.length > 0 && payload.creds.Address.length > 0 && payload.creds.confirmPassword.length > 0 && payload.creds.name.length > 0) {
      toast.success("You've been registered successfully");
      dispatch(receiveRegister(payload))
    } else {
      dispatch(registerError("Something was wrong. Try again"));
    }
  }
}
