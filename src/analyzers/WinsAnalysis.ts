import { MatchData } from "../MatchData";
import { matchResults } from "../MatchResults";
import { Analyzer } from "../Summary";

//Implements for Interface
export class WinsAnalysis implements Analyzer{
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        
    let wins = 0;

    for (let match of matches) {
    if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        wins++;
        } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
        wins++;
        }
    }
    return `Team ${this.teamName} won ${wins} games`;
  }
}