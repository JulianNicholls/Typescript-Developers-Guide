import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analysers/WinsAnalysis';
import { ConsoleReport } from './ReportTargets/ConsoleReport';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private _analyser: Analyser, private _target: OutputTarget) { }

  static consoleWinsAnalysis(teamName: string): Summary {
    return new Summary(
      new WinsAnalysis(teamName),
      new ConsoleReport()
    );
  }

  runReport(matches: MatchData[]): void {
    const report = this._analyser.run(matches);
    this._target.print(report);
  }
}
