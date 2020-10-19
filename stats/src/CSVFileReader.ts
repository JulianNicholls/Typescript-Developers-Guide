import fs from 'fs';
import { stringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Tuple for the match information
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
  constructor(private _filename: string) { }

  // While this could be void, there is no reason not to return the read data
  read(): MatchData[] {
    this._data = fs.readFileSync(this._filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResult,
        row[6]
      ]
      );

    return this._data;
  }

  get data(): MatchData[] {
    return this._data;
  }

  _data: MatchData[] = [];
}
