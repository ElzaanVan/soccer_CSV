"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var matches = new CsvFileReader_1.CsvFileReader("soccer.csv");
matches.read();
var manUnitedWins = 0;
for (var _i = 0, _a = matches.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResults_1.matchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResults_1.matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games.");
