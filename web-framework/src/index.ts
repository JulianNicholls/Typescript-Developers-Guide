// import axios from 'axios';
import { User } from './models/User';

const user = new User({ name: 'Clara', age: 49 });

user.on('save', () => {
  console.log('Saved:', user);
});

user.save();
