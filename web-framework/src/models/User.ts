import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

const baseURL = 'http://localhost:3100/users';

export class User {
  constructor(private data: UserProps) { }

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };

    this.trigger('change');
  }

  fetch(): void {
    axios.get(`${baseURL}/${this.get('id')}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get('id');

    if (id)
      axios.put(`${baseURL}/${id}`, this.data);
    else
      axios.post(baseURL, this.data);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] ?? [];

    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] ?? [];

    handlers.forEach((handler) => handler());
  }

  private events: { [key: string]: Callback[]; } = {};
}
