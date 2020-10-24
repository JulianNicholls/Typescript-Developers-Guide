import express from 'express';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['hdskl;tyreiop'] }));

app.use(router);

app.listen(3100, () => {
  console.log('Listening on port 3100');
});
