// import axios from 'axios';
import { User } from './models/User';

const user = new User({ name: 'Clara', age: 49 });

const name = user.get('name');
console.log(name);

user.on('change', () => {
  console.log('changed:', user);
});

user.set({ id: 5 });
