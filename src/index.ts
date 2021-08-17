import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

//Create an Object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('soccer.csv');

//Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


const summary = new Summary(
    new WinsAnalysis("Man United"),
    new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
