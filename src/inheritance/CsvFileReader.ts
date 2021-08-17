import fs from "fs";

export abstract class CsvFileReader<T> {
    data: T []= [];

    constructor(public filename: string){}
    abstract mapRow(row: string[]): T;

    read(): void {
       this.data = fs.readFileSync(this.filename, {
            //encoding type must be set to UTF-8 as to not get raw data, but a string
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map(this.mapRow)
    }
}