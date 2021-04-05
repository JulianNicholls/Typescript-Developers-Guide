import 'reflect-metadata';

export function get(path: string) {
  return function (target: any, key: string, dec: PropertyDescriptor): void {
    Reflect.defineMetadata('path', path, target, key);
  };
}
