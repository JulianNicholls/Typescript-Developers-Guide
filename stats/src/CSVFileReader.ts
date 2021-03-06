import fs from 'fs';

export interface DataReader {
  read(): string[][];
  data: string[][];
}

export class CSVFileReader implements DataReader {
  constructor(private _filename: string) { }

  // While this could be void, there is no reason not to return the read data
  read(): string[][] {
    this._data = fs.readFileSync(this._filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(','));

    return this._data;
  }

  get data(): string[][] {
    return this._data;
  }

  _data: string[][] = [];
}
