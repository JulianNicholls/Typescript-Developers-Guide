import 'reflect-metadata';

// const plane = {
//   colour: 'red'
// };

// Reflect.defineMetadata('note', 'Hi there', plane);
// Reflect.defineMetadata('note', 'Hi there', plane, 'colour');

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const noteColour = Reflect.getMetadata('note', plane, 'colour');

// console.log(note);
// console.log(noteColour);

@controller
class Plane {
  colour = 'red';

  @get('/login')
  fly(): void {
    console.log('Whoosh');
  }
}

function get(path: string) {
  return function (target: any, key: string): void {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    console.log(key, path, middleware);
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);
