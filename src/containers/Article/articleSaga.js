import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './articleConstants';
import * as actions from './articleActions';
import * as services from './articleServices';
   
function* getArticle({ payload }) {
  try {
    const user = yield services.getArticle();
    if (user) yield put(actions.getArticleSuccess({ user }));
   } catch (err) {
    yield put(actions.getArticleFailure({ error: err.message }));
   }
}
    
function* getArticleSaga() {
  yield takeLatest(constants.GET_ARTICLE_START, getArticle);
}
   
export default function* articleSaga() {
  yield all([fork(getArticleSaga)]);
}