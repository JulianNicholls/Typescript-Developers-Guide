import faker from 'faker';

export class User {
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude(55, 51)),
      long: parseFloat(faker.address.longitude(0, -2))
    }
  }

  name: string;
  location: {
    lat: number;
    long: number;
  }
}
