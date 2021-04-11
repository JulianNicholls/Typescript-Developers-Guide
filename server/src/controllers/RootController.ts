import { Request, Response, NextFunction } from 'express';

import { controller, get, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403).send('Not authorised');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <style>
      body { font-family: arial, helvetica, sans-serif; padding: 1rem; }
      </style>
      <div>
        <div>
          <h2>You are logged in.</h2>
          <a href="/auth/logout">Log out</a><br />
          <a href="/protected">See the secrets</a>
        </div>
      </div>
    `);
    }
    else {
      res.send(`
      <style>
      body { font-family: arial, helvetica, sans-serif; padding: 1rem; }
      </style>
      <div>
        <div>
          <h2>You are not logged in.</h2>
          <a href="/auth/login">Log in</a>
        </div>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    <style>
    body { font-family: arial, helvetica, sans-serif; padding: 1rem; }
    h1 { font-size: 1.8rem; }
    </style>
    <div>
      <h1>Protected Content</h1>
      <div>
        You are logged in, so you can see this page.
        <a href="/">Home</a>
      </div>
    </div>
  `);
  }
}
