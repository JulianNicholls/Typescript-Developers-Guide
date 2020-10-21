// I don't like doing this. We'll see if we revisit this later.
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { AxiosPromise, AxiosResponse } from 'axios';

import { Callback } from './Eventing';
import { HasID } from './Sync';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>) { }

  // Delegation FTW!
  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
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

}
