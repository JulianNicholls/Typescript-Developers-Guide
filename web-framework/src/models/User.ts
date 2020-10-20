import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseURL = 'http://localhost:3100/users';

export class User {
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  public attributes: Attributes<UserProps>;
  public events = new Eventing();
  public sync = new Sync<UserProps>(baseURL);
}


      // .then((response: AxiosResponse): void => {
      //   this.set(response.data);
      // });
