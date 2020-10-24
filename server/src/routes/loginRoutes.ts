import { Router, Request, Response, NextFunction } from 'express';

interface LoginFields {
  email: string | undefined;
  password: string | undefined;
}

// Stephen's solution
// interface RequestWithBody {
//   body: { [key: string]: string | undefined; };
// }

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403).send('Not authorised');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: Request<unknown, unknown, LoginFields>, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@example.com' && password === 'password') {
    // Mark person as logged in
    req.session = {
      loggedIn: true
    };

    // Redirect to the root
    res.redirect('/');
  }
  else res.status(400).send('Invalid email address or password');
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;

  res.redirect('/');
});


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
