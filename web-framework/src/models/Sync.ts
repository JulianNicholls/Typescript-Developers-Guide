import axios, { AxiosPromise } from 'axios';

export interface HasID {
  id?: number;
}

export class APISync<T extends HasID> {
  constructor(public baseURL: string) { }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id)
      return axios.put(`${this.baseURL}/${id}`, data);

    return axios.post(this.baseURL, data);
  }
}
