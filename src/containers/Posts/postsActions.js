import * as constants from './postsConstants';

export const getPostsStart = payload => ({
  type: constants.GET_POSTS_START,
  payload
});

export const getPostsSuccess = payload => ({
  type: constants.GET_POSTS_SUCCESS,
  payload
});

export const getPostsFailure = payload => ({
  type: constants.GET_POSTS_FAILURE,
  payload
});

