import { User } from './models/User';

import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Julian', age: 37 });

const rootElement = document.getElementById('root');

if (rootElement) {
  const userForm = new UserForm(
    rootElement,
    user
  );

  userForm.render();
}
else
  throw new Error('Cannot find element with id root');
