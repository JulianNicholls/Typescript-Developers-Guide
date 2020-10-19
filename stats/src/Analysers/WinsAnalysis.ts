import { Analyser } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyser {
  constructor(private _teamName: string) { }

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach(match => {
      if (match[1] === this._teamName && match[5] === MatchResult.HomeWin ||
        match[2] === this._teamName && match[5] === MatchResult.AwayWin)
        ++wins;
    });

    return `${this._teamName} won ${wins} times`;
  }
}
