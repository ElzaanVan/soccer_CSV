"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var MatchReader_1 = require("./MatchReader");
//Create an Object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('soccer.csv');
//Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResults_1.matchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResults_1.matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games.");
