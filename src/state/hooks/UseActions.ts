import {useDispatch} from 'react-redux';
import {actions as authActions} from '../ducks/auth';
import {actions as eventsActions} from '../ducks/events';
// import LoginRequest from 'api/entities/LoginRequest';
import {snackBarActions} from 'state/ducks/snackBar';
import {useHistory} from 'react-router-dom';
import LoginRequest from '../../auth/LoginRequest';
import {routerActions} from '../ducks/router';

export function useAuthActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    login: (loginRequest: LoginRequest) =>
      dispatch(authActions.login({request: loginRequest, history})),
    logout: () => dispatch(authActions.logout({history})),
  };
}

export function useSnackBarActions() {
  const dispatch = useDispatch();
  return {
    closeSnackBar: () => dispatch(snackBarActions.clearSnackbar()),
  };
}

export function useEventsActions() {
  const dispatch = useDispatch();
  return {
    fetchEvents: () => dispatch(eventsActions.fetchEvents()),
  };
}

export function useRouterActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    navigateToLogin: () => dispatch(routerActions.navigateToAuth({history})),
    navigateToProfile: () => dispatch(routerActions.navigateToProfile({history})),
  };
}
