import fs from "fs";

const matches = fs.readFileSync('soccer.csv', {
    //encoding type must be set to UTF-8 as to not get raw data, but a string
    encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => {
    return row.split(',');
});

console.log(matches);