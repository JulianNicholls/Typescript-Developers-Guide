// I don't like doing this. We'll see if we revisit this later.
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import axios, { AxiosResponse } from 'axios';

import { User, UserProps } from './User';
import { Eventing } from './Eventing';

export class Collection {
  constructor(private baseURL: string) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios
      .get(this.baseURL)
      .then((response: AxiosResponse) => {
        response.data.forEach((item: UserProps): void => {
          const user = User.buildUser(item);
          this.models.push(user);
        });

        this.trigger('change');
      });
  }

  models: User[] = [];
  private events = new Eventing();
}
