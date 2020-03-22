import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './authConstants';
import * as actions from './authActions';
import * as services from './authServices';
   
function* getAuth({ payload }) {
  try {
    const user = yield services.getAuth();
    if (user) yield put(actions.getAuthSuccess({ user }));
   } catch (err) {
    yield put(actions.getAuthFailure({ error: err.message }));
   }
}
    
function* getAuthSaga() {
  yield takeLatest(constants.GET_AUTH_START, getAuth);
}
   
export default function* authSaga() {
  yield all([fork(getAuthSaga)]);
}