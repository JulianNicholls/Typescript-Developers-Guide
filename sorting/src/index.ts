class Sorter {
  constructor(private _collection: number[] | string) { }

  get collection() {
    return this._collection;
  }

  sort(): void {
    const { length } = this._collection;

    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - i - 1; ++j) {
        if (this.greater(j)) {
          this.swap(j);
        }
      }
    }
  }

  // Compare item at index idx with item at idx + 1
  private greater(idx: number) {
    if (this._collection instanceof Array)
      return this._collection[idx] > this._collection[idx + 1];

    return this._collection[idx].toLocaleLowerCase() >
      this._collection[idx + 1].toLocaleLowerCase();
  }

  // Swap number at index idx with number at idx + 1
  private swap(idx: number) {
    if (this._collection instanceof Array) {
      const left = this._collection[idx];
      this._collection[idx] = this._collection[idx + 1];
      this._collection[idx + 1] = left;
    }

    if (typeof this._collection === 'string') {
      const left = this._collection[idx];
      const right = this._collection[idx + 1];

      this._collection = this._collection.substr(0, idx) + right + left +
        this._collection.substr(idx + 2);
    }
  }
}

const numbers = [5, -1, 0, 10, 12, 7];
const str = 'DcBaHgFe';

const sorter = new Sorter(numbers);

sorter.sort();
console.log(sorter.collection);

const sorter2 = new Sorter(str);

sorter2.sort();
console.log(sorter2.collection);
