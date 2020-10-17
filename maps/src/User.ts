import faker from 'faker';

import { Mappable } from './CustomMap';

export class User implements Mappable {
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude(58.5, 50)),
      long: parseFloat(faker.address.longitude(1.7, -5.7))
    };

    this.colour = 'red';
  }

  markerContent(): string {
    return this.name;
  }

  name: string;
  location: {
    lat: number;
    long: number;
  }
  colour: string;
}
