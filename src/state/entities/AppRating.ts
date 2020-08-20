import User from 'entities/User';

export default interface AppRating {
  id: string;
  rating: number;
  ratedBy: User;
  date: Date;
  review: string;
}
