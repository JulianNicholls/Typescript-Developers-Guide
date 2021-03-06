import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(private _data: number[]) {
    super();
  }

  get data(): number[] {
    return this._data;
  }

  get length(): number {
    return this._data.length;
  }

  compare(idxLeft: number, idxRight: number): boolean {
    return this._data[idxLeft] > this._data[idxRight];
  }

  swap(idxLeft: number, idxRight: number): void {
    const left = this._data[idxLeft];
    this._data[idxLeft] = this._data[idxRight];
    this._data[idxRight] = left;
  }
}
