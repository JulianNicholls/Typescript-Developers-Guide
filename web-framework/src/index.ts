import { User } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

const baseURL = 'http://localhost:3100/users';

const users = new Collection(baseURL, User.buildUser);

users.on('change', () => {
  console.log(users);

  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
