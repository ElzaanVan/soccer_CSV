import { CsvFileReader } from "./CsvFileReader";
import { matchResults } from "./MatchResults";

const matches = new CsvFileReader("soccer.csv");
matches.read();

// const matchResults = {
//     HomeWin: "H",
//     AwayWin: "A",
//     Draw: "D"
// }


let manUnitedWins = 0;

for (let match of matches.data) {
    if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Machester United Won ${manUnitedWins} games.`);