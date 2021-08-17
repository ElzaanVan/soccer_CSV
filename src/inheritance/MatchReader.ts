import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utilities";
import { matchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, matchResults, string];

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResults, // Type assertion
            row[6]
            ];
    }
}