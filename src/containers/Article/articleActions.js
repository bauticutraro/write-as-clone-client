import * as constants from './articleConstants';

export const getArticleStart = payload => ({
  type: constants.GET_ARTICLE_START,
  payload
});

export const getArticleSuccess = payload => ({
  type: constants.GET_ARTICLE_SUCCESS,
  payload
});

export const getArticleFailure = payload => ({
  type: constants.GET_ARTICLE_FAILURE,
  payload
});

export const setContent = payload => ({
  type: constants.SET_CONTENT,
  payload
});

// Create
export const createArticleStart = payload => ({
  type: constants.CREATE_ARTICLE_START,
  payload
});

export const createArticleSuccess = payload => ({
  type: constants.CREATE_ARTICLE_SUCCESS,
  payload
});

export const createArticleFailure = payload => ({
  type: constants.CREATE_ARTICLE_FAILURE,
  payload
});
