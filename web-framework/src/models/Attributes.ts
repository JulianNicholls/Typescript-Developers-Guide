export class Attributes<T> {
  constructor(private data: T) { }

  // K can only be the name of a key in T.
  // T[K] is the type of the data keyed by K.
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    this.data = { ...this.data, ...update };
  }
}
