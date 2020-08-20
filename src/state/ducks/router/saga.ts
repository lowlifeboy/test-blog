import {all, takeEvery} from 'redux-saga/effects';
import types from './types';
import {NavigationPayload} from './actions';
import {Action} from 'redux-actions';

function goBack({payload}: Action<NavigationPayload>) {
  payload.history.goBack();
}

function navigateToAuth({payload}: Action<NavigationPayload>) {
  payload.history.push('/login');
}

function navigateToMain({payload}: Action<NavigationPayload>) {
  payload.history.push('/');
}

function navigateToProfile({payload}: Action<NavigationPayload>) {
  payload.history.push('/profile');
}

export default function* () {
  yield all([
    takeEvery(types.GO_BACK, goBack),
    takeEvery(types.NAVIGATE_TO_AUTH, navigateToAuth),
    takeEvery(types.NAVIGATE_TO_MAIN, navigateToMain),
    takeEvery(types.NAVIGATE_TO_PROFILE, navigateToProfile),
  ]);
}
