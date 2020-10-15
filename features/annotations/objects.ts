const profile = {
  name: 'Julian',
  age: 25,
  coords: {
    lat: 52,
    long: -1.8
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// Annotated destructuring
const { age }: { age: number } = profile;
const { coords: { lat, long } }: { coords: { lat: number, long: number } } = profile;
