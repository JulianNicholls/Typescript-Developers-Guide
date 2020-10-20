import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
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

  public events = new Eventing();
}
