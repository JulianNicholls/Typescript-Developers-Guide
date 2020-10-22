import { User } from './models/User';

import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ id: 1 });

user.fetch();

const rootElement = document.getElementById('root');

if (rootElement) {
  const userEdit = new UserEdit(
    rootElement,
    user
  );

  userEdit.render();

  console.log(userEdit);
}
else
  throw new Error('Cannot find element with id root');
