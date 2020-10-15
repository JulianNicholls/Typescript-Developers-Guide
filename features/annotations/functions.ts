const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);

  // Allowed to return null or undefined from a void function
}

// 'never' means that the end of the function will NEVER be reached
const throwError = (message: string): never => {
  throw new Error(message);
}

const forecast = {
  date: new Date(),
  weather: 'funny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date, forecast.weather);
}

const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date, weather);
}
