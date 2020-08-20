import User from './User';

export default interface RecentVisitor {
  id: string;
  visitedBy: User;
  visiterContacts: string;
  visitedUser: User;
  visitedUserContacts: string;
}
