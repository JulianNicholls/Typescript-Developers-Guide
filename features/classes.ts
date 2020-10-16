class Vehicle {
  constructor(public colour: string) { };

  public drive(): void {
    console.log('Brum, brum');
  }

  public honk(): void {
    console.log('Awoooooooga!')
  }
}

class Car extends Vehicle {
  constructor(colour: string, public wheels: number) { super(colour); }

  public drive(): void {
    console.log('Vroooooom!')
  }

  public honk(): void {
    console.log('Beep')
  }
}

const vehicle = new Vehicle('Red');

console.log(vehicle.colour);
vehicle.drive();
vehicle.honk();

const car = new Car('Green', 4);

console.log(car.colour);
console.log(car.wheels);
car.drive();
car.honk();
