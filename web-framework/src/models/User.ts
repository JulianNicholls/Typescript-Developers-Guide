// I don't like doing this. We'll see if we revisit this later.
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { AxiosResponse } from 'axios';

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

  // Delegation FTW!
  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    const id = this.get('id');

    if (!id) throw new Error('Cannot fetch a user without an id');

    this.sync.fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((): void => {
        this.events.trigger('save');
      }).catch(() => {
        this.events.trigger('error');
      });
  }

  private attributes: Attributes<UserProps>;
  private events = new Eventing();
  private sync = new Sync<UserProps>(baseURL);
}


      // .then((response: AxiosResponse): void => {
      //   this.set(response.data);
      // });
