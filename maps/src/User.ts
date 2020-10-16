import faker from 'faker';

export class User {
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude(58.5, 50)),
      long: parseFloat(faker.address.longitude(1.7, -5.7))
    }
  }

  name: string;
  location: {
    lat: number;
    long: number;
  }
}
