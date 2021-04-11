import { Request, Response } from 'express';

import { get, controller, post, validateBody } from './decorators';

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

  @post('/login')
  @validateBody('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@example.com' && password === 'password') {
      // Mark person as logged in
      req.session = {
        loggedIn: true
      };

      // Redirect to the root
      res.redirect('/');
    }
    else res.status(400).send('Invalid email address or password');
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null;

    res.redirect('/');
  }
}
