import User from './User';

export default interface CommonEntity {
  id: string;
  initiator: User;
  target: User;
  timestamp: Date;
}
