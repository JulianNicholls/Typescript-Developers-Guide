import { CSVFileReader } from './CSVFileReader';
import { stringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Tuple for the match information
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CSVFileReader<MatchData> {
  constructor(filename: string) {
    super(filename);
  }

  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
