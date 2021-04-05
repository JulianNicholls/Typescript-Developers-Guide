import { Router, Request, Response, NextFunction } from 'express';
import { get } from './decorators/routes';
import { controller } from './decorators/controller';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
  <style>
  body { font-family: arial, helvetica, sans-serif; padding: 1rem; }
  label { display: inline-block; width: 6em; margin-bottom: 0.75rem; }
  input { font-size: inherit; padding: 0.3em;}
  </style>
  <form method="post">
    <div>
      <label for="email">Email</label>
      <input id="email" name="email" />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" />
    </div>
    <button>Log in</button>
  </form>
  `);
  }
}
