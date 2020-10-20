import { User } from './models/User';

const user = new User({ name: 'Julian', age: 23 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ age: 24 });
console.log(user.get('age'));

user.set({ name: 'Julian N' });
console.log(user.get('name'));

user.set({});
