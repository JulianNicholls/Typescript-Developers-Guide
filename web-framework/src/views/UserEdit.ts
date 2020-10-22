import { User, UserProps } from '../models/User';
import { View, RegionMap } from './View';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): RegionMap {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  template(): string {
    return `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
    `;
  }
}
