import { MatchData } from "./MatchData";

//We need to create a class that runs the real analysis : Wins analysis
export interface Analyzer {
    run(matches: MatchData[]): string;
}


export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport(matches: MatchData[]): void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

