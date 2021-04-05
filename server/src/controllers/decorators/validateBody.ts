import 'reflect-metadata';

import { MetadataKeys } from './MetadataKeys';

export function validateBody(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
