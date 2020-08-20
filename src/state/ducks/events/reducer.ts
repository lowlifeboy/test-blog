import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {
  empty,
  failed,
  LoadableContainer,
  success,
} from '../../entities/LoadableContainer';
import Event from 'entities/Event';

type ReducerState = LoadableContainer<{events: Event[]}>;

const fetchEventsCompleted: ReducerNextThrow<ReducerState, Event[]> = {
  next: (_, {payload}) => success({events: payload}),
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<ReducerState, never>(
  {
    [types.FETCH_EVENTS]: (state) => ({...state, isBusy: true}),
    [types.FETCH_EVENTS_COMPLETED]: fetchEventsCompleted,
  },
  empty(),
);
