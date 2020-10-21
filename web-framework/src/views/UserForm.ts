import { User } from '../models/User';

type EventCallback = () => void;

export class UserForm {
  constructor(public parent: Element, public model: User) { }

  eventsMap(): { [key: string]: EventCallback; } {
    return {
      'click:#set-age': this.onSetAge,
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <h2>User Form</h2>
      <div class="display">Name: ${this.model.get('name')}</div>
      <div class="display">Age: ${this.model.get('age')}</div>

      <input />

      <button>Click me</button>
      <button id="set-age">Set random age</button>
    </div>
    `;
  }

  render(): void {
    const element = document.createElement('template');

    element.innerHTML = this.template();

    this.bindEvents(element.content);
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
