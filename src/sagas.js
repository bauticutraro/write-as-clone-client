import { all, fork } from 'redux-saga/effects';
// sagas
import postsSaga from './containers/Posts/postsSaga';

export default function* root() {
  yield all([fork(postsSaga)]);
}
