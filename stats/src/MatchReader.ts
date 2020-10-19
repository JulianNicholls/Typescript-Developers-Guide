import { stringToDate } from './utils';
import { DataReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

export class MatchReader {
  constructor(private _reader: DataReader) { }

  // While this could be void, there is no reason not to return the read data
  load(): MatchData[] {
    const lines = this._reader.read();

    this._matches = lines.map((row: string[]): MatchData => [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6]
    ]);

    return this._matches;
  }

  get matches(): MatchData[] {
    return this._matches;
  }

  _matches: MatchData[] = [];
}
