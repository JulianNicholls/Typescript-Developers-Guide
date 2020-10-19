import fs from 'fs';

export abstract class CSVFileReader<T> {
  constructor(private _filename: string) { }

  // While this could be void, there is no reason not to return the read data
  read(): T[] {
    this._data = fs.readFileSync(this._filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);

    return this._data;
  }

  get data(): T[] {
    return this._data;
  }

  abstract mapRow(row: string[]): T;

  _data: T[] = [];
}
