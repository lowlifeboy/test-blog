import User from './User';

export default interface Date {
  id: string;
  dateRequestedBy: User;
  dateRequestedOn: User;
  dateType: string;
  review: string;
}
