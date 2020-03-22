import { all, fork } from 'redux-saga/effects';
// sagas
import authSaga from './containers/Auth/authSaga';
import postsSaga from './containers/Posts/postsSaga';

export default function* root() {
  yield all([fork(authSaga), fork(postsSaga)]);
}
