import {createAction} from 'redux-actions';
import types from './types';
import * as H from 'history';

export type NavigationPayload = {history: H.History};

export default {
  goBack: createAction<NavigationPayload>(types.GO_BACK),
  navigateToAuth: createAction<NavigationPayload>(types.NAVIGATE_TO_AUTH),
  navigateToMain: createAction<NavigationPayload>(types.NAVIGATE_TO_MAIN),
  navigateToProfile: createAction<NavigationPayload>(types.NAVIGATE_TO_PROFILE),
};
