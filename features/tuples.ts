const drink = {
  colour: 'Brown',
  carbonated: true,
  sugar: 50
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['tan', false, 0];

// Why use a Tuple?
// Occasionally, as a CSV line for example, maybe...
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  hp: 400,
  weight: 1.223
}
