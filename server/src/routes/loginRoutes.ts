import { Router, Request, Response } from 'express';

interface LoginFields {
  email: string | undefined;
  password: string | undefined;
}

// Stephen's solution
// interface RequestWithBody {
//   body: { [key: string]: string | undefined; };
// }

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

  if (email && password) {
    res.send(`OK: ${email} : ${password}`);
  }
  else res.status(400).send('You must enter an email address and password');
});

export { router };
