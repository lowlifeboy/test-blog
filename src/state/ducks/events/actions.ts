import {createAction} from 'redux-actions';
import types from './types';
import Event from 'entities/Event';

export default {
  fetchEvents: createAction(types.FETCH_EVENTS),
  fetchEventsCompleted: createAction<Event[]>(types.FETCH_EVENTS_COMPLETED),
};
