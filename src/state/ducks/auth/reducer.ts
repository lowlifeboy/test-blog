import {Action, handleActions} from 'redux-actions';
import types from './types';
import {Auth} from 'state/entities/Auth';
import User from '../../entities/User';

type ReducerState = Auth;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const authCompleted: ReducerNextThrow<ReducerState, any> = {
//   next: (state) => ({...state, isBusy: false}),
//   throw: (state, {payload}) => ({
//     ...state,
//     isBusy: false,
//     error: payload.data.message,
//     user: payload.user,
//   }),
// };
//
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const logout: ReducerNextThrow<ReducerState, any> = {
//   next: (state) => ({...state, isBusy: false}),
//   throw: (state) => ({
//     ...state,
//     isBusy: false,
//     error: undefined,
//     user: undefined,
//   }),
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default handleActions<ReducerState, any>(
  {
    [types.LOGIN_USER]: (state, {payload}: Action<{user: User}>) => ({
      ...state,
      isBusy: true,
      error: undefined,
      user: payload.user,
    }),
    [types.AUTH_COMPLETED]: (state, {payload}: Action<{user: User}>) => ({
      ...state,
      isBusy: true,
      error: undefined,
      user: payload.user,
    }),
    [types.LOGOUT]: (state) => ({
      ...state,
      isBusy: true,
      error: undefined,
      user: undefined,
    }),
  },
  {
    isBusy: false,
    error: undefined,
    user: undefined,
  },
);
