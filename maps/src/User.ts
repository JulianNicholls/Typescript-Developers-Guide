import faker from 'faker';

class User {
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude(55, 11)),
      long: parseFloat(faker.address.longitude(0, -2))
    }
  }

  name: string;
  location: {
    lat: number;
    long: number;
  }
}

export default User;
