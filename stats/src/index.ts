import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.consoleWinsAnalysis('Man United');

summary.runReport(matchReader.load());
