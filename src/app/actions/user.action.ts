import { User } from '../models/User';

export class AddUser {
  // static readonly type = '[User] Add';
  // action type 정의가 왜 필요한지....
  static readonly type = 'Add';

  constructor(public payload: User) {}
}
