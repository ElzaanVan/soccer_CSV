import fs from "fs";
import { dateStringToDate } from "./utilities";
import { matchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, matchResults, string];

export class CsvFileReader {
    data: MatchData []= [];

    constructor(public filename: string){}

    read(): void {
       this.data = fs.readFileSync(this.filename, {
            //encoding type must be set to UTF-8 as to not get raw data, but a string
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map((row: string[]): MatchData => {
            return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResults, // Type assertion
            row[6]
            ];
        });
    }
}