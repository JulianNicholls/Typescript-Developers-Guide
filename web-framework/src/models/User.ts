interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  constructor(private data: UserProps) { }

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };

    this.trigger('change');
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] ?? [];

    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] ?? [];

    handlers.forEach((handler) => handler());
  }

  private events: { [key: string]: Callback[]; } = {};
}
