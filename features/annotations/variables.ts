let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let mine: number[] = [53, 23, 50];
let truths: boolean[] = [true, false, true, true];

// Classes
class Car { };

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = { x: 10, y: 20 };

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations

// 1. When functions return any
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When initialisation is delayed
const words = ['red', 'green', 'blue'];
let foundWord: boolean;   // Actually should be initialised to false anyway

words.forEach((word) => {
  if (word === 'green') foundWord = true;
});

// 3. Where a variable's type cannot be (correctly) inferred
let numbers = [10, -1, 12];
let positiveNumber: boolean | number = false;

numbers.forEach((num) => {
  if (num > 0) positiveNumber = num;
});
