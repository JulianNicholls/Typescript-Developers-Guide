import { User } from '../models/User';

type EventCallback = () => void;

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModelChange();
  }

  bindModelChange(): void {
    this.model.on('change', () => this.render());
  }

  eventsMap(): { [key: string]: EventCallback; } {
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

  render(): void {
    const element = document.createElement('template');

    element.innerHTML = this.template();

    this.bindEvents(element.content);

    // Clear and refill the parent
    this.parent.innerHTML = '';
    this.parent.append(element.content);
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
