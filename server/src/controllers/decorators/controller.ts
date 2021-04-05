import 'reflect-metadata';

import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export function controller(prefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);

      if (path) {
        const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

        router[method](`${prefix}${path}`, routeHandler);
      }
    }
  };
}
