import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseURL = 'http://localhost:3100/users';

export class User {
  constructor(private data: UserProps) { }

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  public events = new Eventing();
  public sync = new Sync<UserProps>(baseURL);
}


      // .then((response: AxiosResponse): void => {
      //   this.set(response.data);
      // });
