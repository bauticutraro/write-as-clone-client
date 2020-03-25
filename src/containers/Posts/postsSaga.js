import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './postsConstants';
import * as actions from './postsActions';
import * as services from './postsServices';

function* getPosts() {
  try {
    const posts = yield services.getPosts();
    if (posts) yield put(actions.getPostsSuccess({ list: posts }));
  } catch (err) {
    yield put(actions.getPostsFailure({ error: err.message }));
  }
}

function* getPostsSaga() {
  yield takeLatest(constants.GET_POSTS_START, getPosts);
}

export default function* postsSaga() {
  yield all([fork(getPostsSaga)]);
}
