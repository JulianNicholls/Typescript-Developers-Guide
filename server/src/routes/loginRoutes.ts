import { Router, Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403).send('Not authorised');
}

const router = Router();




router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <style>
      body { font-family: arial, helvetica, sans-serif; padding: 1rem; }
      </style>
      <div>
        <div>
          You are logged in.
          <a href="/logout">Log out</a>
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
          You are not logged in.
          <a href="/login">Log in</a>
        </div>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;

  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
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
});

export { router };
