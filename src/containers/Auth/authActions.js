import * as constants from './authConstants';

export const getAuthStart = payload => ({
  type: constants.GET_AUTH_START,
  payload
});

export const getAuthSuccess = payload => ({
  type: constants.GET_AUTH_SUCCESS,
  payload
});

export const getAuthFailure = payload => ({
  type: constants.GET_AUTH_FAILURE,
  payload
});

