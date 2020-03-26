import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './authConstants';
import * as actions from './authActions';
import * as services from './authServices';

function* register({ payload }) {
  try {
    const user = yield services.register(payload);

    if (user) yield put(actions.registerSuccess({ user }));
  } catch (err) {
    yield put(
      actions.registerFailure({
        error: err.response ? err.response.data.error : err
      })
    );
  }
}

function* registerSaga() {
  yield takeLatest(constants.REGISTER_START, register);
}

// login
function* login({ payload }) {
  try {
    const user = yield services.login(payload);

    if (user) yield put(actions.loginSuccess({ user }));
  } catch (err) {
    yield put(
      actions.loginFailure({
        error: err.response ? err.response.data.error : err
      })
    );
  }
}

function* loginSaga() {
  yield takeLatest(constants.LOGIN_START, login);
}

export default function* authSaga() {
  yield all([fork(registerSaga), fork(loginSaga)]);
}
