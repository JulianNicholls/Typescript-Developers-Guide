import express from 'express';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

import './controllers/LoginController';
import { router as controllerRouter } from './controllers/decorators/controller';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['hdskl38957tyreiop'] }));

app.use(router);
app.use(controllerRouter);

app.listen(3100, () => {
  console.log('Listening on port 3100');
});
