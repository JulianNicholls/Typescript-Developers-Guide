import faker from 'faker';

export class Company {
  constructor() {
    this.companyName = `${faker.company.companyName()} ${faker.company.companySuffix()}`;
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(55, 51)),
      long: parseFloat(faker.address.longitude(0, -2))
    }
  }

  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  }
};
