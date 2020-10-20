import axios from 'axios';
import { User } from './models/User';

const user = new User({ name: 'Julian', age: 23 });

const baseURL = 'http://localhost:3100/users';

const users = await axios.get(baseURL);

console.log(users);
