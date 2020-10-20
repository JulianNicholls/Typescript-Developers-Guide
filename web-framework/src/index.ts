// import axios from 'axios';
import { User } from './models/User';

// const baseURL = 'http://localhost:3100/users';

const user = new User({ name: 'Tara', age: 23 });

user.events.on('change', () => {
  console.log('Changed', user);
});

user.events.trigger('change');
