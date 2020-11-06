class Boat {
  colour = 'red';

  @testDecorator
  get formattedColour(): string {
    return `This boat's colour is ${this.colour}`;
  }

  @testDecorator
  pilot(): void {
    console.log('Swoosh');
  }

  @testDecorator
  drive(): void {
    console.log('Vroom');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}
