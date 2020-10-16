import faker from 'faker';

export class Company {
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(58.5, 50)),
      long: parseFloat(faker.address.longitude(1.7, -5.7))
    }
  }

  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  }
};
