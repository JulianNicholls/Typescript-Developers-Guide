import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';

let manUWins = 0;

const reader = new CSVFileReader('football.csv');
const matches = reader.read();

matches.forEach(match => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin ||
    match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    ++manUWins;
});

console.log(`Manchester United won ${manUWins} times.`);
