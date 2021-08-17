import { CsvFileReader } from "./CsvFileReader";
import { matchResults } from "./MatchResults";

const matches = new CsvFileReader("soccer.csv");
matches.read();

let manUnitedWins = 0;

for (let match of matches.data) {
    if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United won ${manUnitedWins} games.`);
