// import axios from 'axios';
import { User } from './models/User';
import { Collection } from './models/Collection';

const baseURL = 'http://localhost:3100/users';

const collection = new Collection(baseURL);

collection.on('change', () => {
  console.log('Loaded!:', collection);
});

collection.fetch();
