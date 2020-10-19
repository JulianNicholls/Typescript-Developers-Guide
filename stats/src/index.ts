import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
  .split('\n')
  .map((row: string): string[] => row.split(','));

let manUWins = 0;

matches.forEach(match => {
  if (match[1] === 'Man United' && match[5] === 'H' ||
    match[2] === 'Man United' && match[5] === 'A')
    ++manUWins;
});

console.log(`Manchester United won ${manUWins} times.`);
