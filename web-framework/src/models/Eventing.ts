type Callback = () => void;

export class Eventing {
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] ?? [];

    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName] ?? [];

    handlers.forEach((handler) => handler());
  };

  private events: { [key: string]: Callback[]; } = {};
}
