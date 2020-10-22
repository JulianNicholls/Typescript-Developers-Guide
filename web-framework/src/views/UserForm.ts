import { User, UserProps } from '../models/User';
import { View, EventsMap } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): EventsMap {
    return {
      'click:#set-name': this.onSetName,
      'click:#set-age': this.onSetAge,
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
    <div>
      <h2>User Form</h2>
      <p class="display">
        Name: ${this.model.get('name')}<br />
        Age: ${this.model.get('age')}
      </p>

      <input value="${this.model.get('name')}" />

      <div class="button-holder">
        <button id="set-name">Update name</button>
        <button id="set-age">Set random age</button>
      </div>
    </div>
    `;
  }
}
