@classDecorator
class Boat {
  @logProperty
  colour = 'red';

  @logAccessor
  get formattedColour(): string {
    return `This boat's colour is ${this.colour}`;
  }

  // @logError
  @catchError('The factory boat sunk')
  pilot(@logParameter speed: string): void {
    if (speed === 'fast') console.log('Vroooom');
    else
      console.log('Put Put');
  }
}

// Just a plain decorator
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    }
    catch (err) {
      console.log('The boat sunk!');
    }
  };
}

// A decorator factory
function catchError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      }
      catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

// A decorator for an Property. NO desc parameter!
// Somewhat useless, since we can't access the property inside.
function logProperty(target: any, key: string): void {
  console.log(key);
}

// A decorator for an accessor
function logAccessor(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(key);
}

// A decorator for a parameter
function logParameter(target: any, key: string, index: number): void {
  console.log(key, index);
}

// A class decorator

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

// const boat = new Boat();

// boat.pilot();
