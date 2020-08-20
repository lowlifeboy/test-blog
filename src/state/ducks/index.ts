import {saga as authSaga} from './auth';
import authReducer from './auth/reducer';
import {saga as routerSaga} from './router';
import {saga as alertSaga} from './alert';
import {reducer as snackBarReducer} from 'state/ducks/snackBar';
import {all} from 'redux-saga/effects';
import State from 'state/entities/State';
import {combineReducers} from 'redux';
import {saga as eventsSaga, reducer as eventsReducer} from './events';

export const rootReducer = combineReducers<State>({
  auth: authReducer,
  snackBar: snackBarReducer,
  events: eventsReducer,
});

export function* rootSaga() {
  yield all([
    //
    authSaga(),
    routerSaga(),
    alertSaga(),
    eventsSaga(),
  ]);
}
