import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './Analysers/WinsAnalysis';
import { ConsoleReport } from './ReportTargets/ConsoleReport';

const csvReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
const matches = matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Bournemouth'),
  new ConsoleReport()
);

summary.runReport(matches);
