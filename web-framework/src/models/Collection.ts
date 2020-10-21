// I don't like doing this. We'll see if we revisit this later.
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import axios, { AxiosResponse } from 'axios';

// import { User, UserProps } from './User';
import { Eventing } from './Eventing';

export class Collection<T, PropsType> {
  constructor(
    private baseURL: string,
    private deserialise: (data: PropsType) => T) { }

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
        response.data.forEach((value: PropsType): void => {
          this.models.push(this.deserialise(value));
        });

        this.trigger('change');
      });
  }

  models: T[] = [];
  private events = new Eventing();
}
