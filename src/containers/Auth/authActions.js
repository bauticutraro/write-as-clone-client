import * as constants from './authConstants';

export const registerStart = payload => ({
  type: constants.REGISTER_START,
  payload
});

export const registerSuccess = payload => ({
  type: constants.REGISTER_SUCCESS,
  payload
});

export const registerFailure = payload => ({
  type: constants.REGISTER_FAILURE,
  payload
});

export const loginStart = payload => ({
  type: constants.LOGIN_START,
  payload
});

export const loginSuccess = payload => ({
  type: constants.LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: constants.LOGIN_FAILURE,
  payload
});
