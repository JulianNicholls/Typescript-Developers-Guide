// import axios from 'axios';
import { User } from './models/User';

const user = User.buildUser({ id: 4 });

user.on('change', () => {
  console.log('Changed:', user);
});

user.fetch();
