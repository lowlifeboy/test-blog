import {createAction} from 'redux-actions';
import types from './types';
import LoginRequest from '@spryrocks/react-auth/LoginRequest';
import {NavigationPayload} from 'state/ducks/router/actions';
import User from '../../entities/User';

export type AuthCompleted = {user: User} & NavigationPayload;
export type Login = {request: LoginRequest} & NavigationPayload;

export default {
  login: createAction<Login>(types.LOGIN_USER),
  authCompleted: createAction<AuthCompleted>(types.AUTH_COMPLETED),
  logout: createAction<NavigationPayload>(types.LOGOUT),
};
