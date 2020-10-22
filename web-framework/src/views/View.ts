import { Model } from '../models/Model';

export type EventCallback = () => void;
export type EventsMap = { [key: string]: EventCallback; };

export abstract class View<T extends Model<PropsType>, PropsType> {
  constructor(public parent: Element, protected model: T) {
    this.bindModelChange();
  }

  bindModelChange(): void {
    this.model.on('change', () => this.render());
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

  abstract eventsMap(): EventsMap;
  abstract template(): string;
}
