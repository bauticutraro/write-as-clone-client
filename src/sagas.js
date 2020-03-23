import { all, fork } from 'redux-saga/effects';
// sagas
import authSaga from './containers/Auth/authSaga';
import postsSaga from './containers/Posts/postsSaga';
import articleSaga from './containers/Article/articleSaga';

export default function* root() {
  yield all([fork(authSaga), fork(postsSaga), fork(articleSaga)]);
}
