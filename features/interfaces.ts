interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
};

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(2000, 11, 10),
  broken: true,
  drive: 'rear',   // Additional, but fine
  summary() {
    return `${this.year.getFullYear()} ${this.name}`
  }
};

const drink = {
  colour: 'Brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `It's ${this.colour}, ${this.carbonated ? 'carbonated' : 'uncarbonated'}, and has ${this.sugar}g of sugar`;
  }
}

// Print a car with a name, year, and whether it's broken
const printCar = (car: { name: string; year: Date; broken: boolean }): void => {
  console.log(`
  name: ${car.name}
  year: ${car.year}
  broken: ${car.broken}`);
}

// Print a Vehicle, which has a name, year, and whether it's broken, at least
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
  name: ${vehicle.name}
  year: ${vehicle.year}
  broken: ${vehicle.broken}`);
}

// Print any item that has a summary function
const printReportable = (item: Reportable): void => {
  console.log(item.summary());
}

printCar(oldCivic);
printVehicle(oldCivic);
printReportable(oldCivic);
printReportable(drink);
