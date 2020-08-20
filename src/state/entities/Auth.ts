import User from './User';

export interface Auth {
  user: User | undefined;
  isBusy: boolean;
  error: string | undefined;
}
