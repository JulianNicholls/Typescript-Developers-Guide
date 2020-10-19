export abstract class Sorter {
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - i - 1; ++j) {
        if (this.compare(j, j + 1))
          this.swap(j, j + 1);
      }
    }
  }

  abstract length: number;
  abstract compare(left: number, right: number): boolean;
  abstract swap(left: number, right: number): void;
}
