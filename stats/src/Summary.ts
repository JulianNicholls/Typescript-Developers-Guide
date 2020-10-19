import { MatchData } from './MatchData';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private _analyser: Analyser, private _target: OutputTarget) { }

  runReport(matches: MatchData[]): void {
    const report = this._analyser.run(matches);
    this._target.print(report);
  }
}
