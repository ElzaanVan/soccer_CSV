"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResults_1 = require("../MatchResults");
//Implements for Interface
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === "Man United" && match[5] === MatchResults_1.matchResults.HomeWin) {
                wins++;
            }
            else if (match[2] === "Man United" && match[5] === MatchResults_1.matchResults.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.teamName + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
