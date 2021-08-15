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

let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++;
    }
}

console.log(`Machester United Won ${manUnitedWins} games.`);