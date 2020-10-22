import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, parent: Element): void {
    new UserShow(parent, model).render();
  }
}
