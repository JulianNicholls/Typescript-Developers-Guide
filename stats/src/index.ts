import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CSVFileReader } from './CSVFileReader';

let manUWins = 0;

const csvReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
const matches = matchReader.load();

matches.forEach(match => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin ||
    match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    ++manUWins;
});

console.log(`Manchester United won ${manUWins} times.`);
