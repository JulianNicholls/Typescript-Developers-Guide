import { User } from './models/User';

const collection = User.collection();

collection.on('change', () => {
  console.log('Loaded:', collection);
});

collection.fetch();
