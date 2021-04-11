import 'reflect-metadata';
import { Request, Response, NextFunction, RequestHandler } from 'express';

import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) return res.status(422).send('Invalid request');

    for (const key of keys) {
      if (!req.body[key]) {
        return res.status(422).send(`Invalid request: ${key} must be specified`);
      }
    }

    next();
  };
}

export function controller(prefix: string) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (target: Function): void {
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);

      if (path) {
        const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
        const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
        const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

        const validator = bodyValidators(requiredBodyProps);

        router[method](`${prefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
