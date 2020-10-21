import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { APISync } from './APISync';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseURL = 'http://localhost:3100/users';

export class User extends Model<UserProps> {
  static buildUser(data: UserProps): User {
    return new User(
      new Attributes<UserProps>(data),
      new Eventing(),
      new APISync<UserProps>(baseURL)
    );
  }

  static collection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(baseURL, User.buildUser);
  }
}
