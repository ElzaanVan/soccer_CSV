import { CsvFileReader } from "./CsvFileReader";
import { matchResults } from "./MatchResults";
import { MatchReader } from "./MatchReader";

//Create an Object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('soccer.csv');

//Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United won ${manUnitedWins} games.`);
