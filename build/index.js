"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var matches = new CsvFileReader_1.CsvFileReader("soccer.csv");
matches.read();
// const matchResults = {
//     HomeWin: "H",
//     AwayWin: "A",
//     Draw: "D"
// }
// Use enum (enumeration)
// Collection of closely related values
// Fixed set and small set of values
var matchResults;
(function (matchResults) {
    matchResults["HomeWin"] = "H";
    matchResults["AwayWin"] = "A";
    matchResults["Draw"] = "D";
})(matchResults || (matchResults = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = matches.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Machester United Won " + manUnitedWins + " games.");
