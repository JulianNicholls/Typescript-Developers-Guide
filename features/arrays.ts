const carMakers: string[] = ['Ford', 'Toyota', 'BMW'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['Focus'],
  ['Camry'],
  ['135']
];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car) => car.toLocaleLowerCase());

// Multiple types
const importantDates = [new Date(), '1969/07/21'];
importantDates.push('1997-01-23')
importantDates.push(new Date('1997-01-23'));
