import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(private _data: string) {

  }

  get data(): string {
    return this._data;
  }

  get length(): number {
    return this._data.length;
  }

  compare(idxLeft: number, idxRight: number): boolean {
    return this._data[idxLeft].toLocaleLowerCase() > this._data[idxRight].toLocaleLowerCase();
  }

  swap(idxLeft: number, idxRight: number): void {
    const left = this._data[idxLeft];
    const right = this._data[idxRight];

    this._data = this._data.substr(0, idxLeft) + right + left + this._data.substr(idxRight + 1);
  }
}
