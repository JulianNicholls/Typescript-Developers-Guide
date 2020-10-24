import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3100, () => {
  console.log('Listening on port 3100');
});
