import { stringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { DataReader } from './CSVFileReader';

// Tuple for the match information
type MatchData = [Date, string, string, number, number, MatchResult, string];

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
