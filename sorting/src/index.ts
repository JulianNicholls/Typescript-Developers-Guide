class Sorter {
  constructor(private _collection: number[]) { }

  get collection() {
    return this._collection;
  }

  sort(): void {
    const { length } = this._collection;

    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - i - 1; ++j) {
        if (this._collection[j] > this._collection[j + 1]) {
          this.swap(j);
        }
      }
    }
  }

  // Swap number at index idx with number at idx + 1
  private swap(idx: number) {
    const left = this._collection[idx];
    this._collection[idx] = this._collection[idx + 1];
    this._collection[idx + 1] = left;
  }
}

const numbers = [5, -1, 0, 10, 12, 7];

const sorter = new Sorter(numbers);

sorter.sort();
console.log(sorter.collection);
