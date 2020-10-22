import { Model } from '../models/Model';

export type EventCallback = () => void;
export type EventMap = { [key: string]: EventCallback; };
export type ElementMap = { [key: string]: Element; };
export type RegionMap = { [key: string]: string; };

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

    this.mapRegions(element.content);
    this.onRender();

    // Clear and refill the parent
    this.parent.innerHTML = '';
    this.parent.append(element.content);
  }

  private bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  private mapRegions(fragment: DocumentFragment): void {
    const map = this.regionsMap();

    for (const key in map) {
      const selector = map[key];
      const element = fragment.querySelector(selector);

      if (element) this.regions[key] = element;
    }
  }

  eventsMap(): EventMap {
    return {};
  }

  regionsMap(): RegionMap {
    return {};
  }

  onRender(): void { return; }

  regions: ElementMap = {};
  abstract template(): string;
}
