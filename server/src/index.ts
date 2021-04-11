import express from 'express';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['hdskl38957tyreiop'] }));

app.use(AppRouter.getInstance());

app.listen(3100, () => {
  console.log('Listening on port 3100');
});
