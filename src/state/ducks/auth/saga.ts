import types from './types';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import routerActions from '../router/actions';
import {AuthCompleted, Login} from './actions';
import {actions} from './index';
import User from 'entities/User';
import {restdb} from '../helper';
import {snackBarActions} from '../snackBar';

function* loginUser({payload: {request, history}}: Action<Login>) {
  try {
    console.log(request.email);
    console.log(request.password);
    const user: User[] = yield call(() => {
      return restdb
        .get(
          `/test-users?q={"email":%20"${request.email}",%20"password":%20"${request.password}"}`,
        )
        .then((res) => res.data)
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e);
        });
    });

    console.log(user[0]);

    yield put(actions.authCompleted({user: user[0], history}));
  } catch (e) {
    yield put(actions.authCompleted(e));
  }
}

function* authCompleted({payload, error}: Action<AuthCompleted>) {
  if (payload.user === undefined || error) {
    yield put(
      snackBarActions.showSnackbar({
        message: 'Email or password is wrong',
        type: 'error',
      }),
    );
  } else {
    yield put(routerActions.navigateToMain(payload));
  }
}

function* logout({payload}: Action<AuthCompleted>) {
  yield put(routerActions.navigateToMain(payload));
}

export default function* () {
  yield all([
    takeEvery(types.LOGIN_USER, loginUser),
    takeEvery(types.AUTH_COMPLETED, authCompleted),
    takeEvery(types.LOGOUT, logout),
  ]);
}
