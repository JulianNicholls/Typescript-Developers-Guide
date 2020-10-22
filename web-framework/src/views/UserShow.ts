import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h2>User Form</h2>
      <p class="display">
        Name: ${this.model.get('name')}
        <br />
        Age: ${this.model.get('age')}
      </p>
    </div>
    `;
  }
}
