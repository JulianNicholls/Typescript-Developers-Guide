import faker from 'faker';

import { Mappable } from './CustomMap';

export class Company implements Mappable {
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(58.5, 50)),
      long: parseFloat(faker.address.longitude(1.7, -5.7))
    };

    this.colour = 'darkgreen';
  }

  markerContent(): string {
    return `
<div>
  <h1>${this.companyName}</h1>
  <h3>${this.catchPhrase}</h3>
</div>`;
  }

  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  }
  colour: string;
}
