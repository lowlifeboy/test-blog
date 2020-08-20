import types from './types';
import {all, put, takeEvery, call} from 'redux-saga/effects';
import actions from './actions';
import Event from 'entities/Event';
import {Action} from 'redux-actions';
import {snackBarActions} from '../snackBar';
import {processError} from '../alert/saga';
import {restdb} from '../helper';

function* fetchEvents() {
  try {
    const events: Event[] = yield call(() => {
      return restdb.get('/events').then((res) => res.data);
    });

    yield put(actions.fetchEventsCompleted(events));
  } catch (e) {
    yield put(actions.fetchEventsCompleted(e));
  }
}

function* fetchEventsCompleted({payload, error}: Action<Event[]>) {
  if (error) {
    yield put(
      snackBarActions.showSnackbar({
        message: processError({error: payload}),
        type: 'error',
      }),
    );
  }
}

export default function* () {
  yield all([
    //
    takeEvery(types.FETCH_EVENTS, fetchEvents),
    takeEvery(types.FETCH_EVENTS_COMPLETED, fetchEventsCompleted),
  ]);
}
