"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
//Create an Object that satisfies the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('soccer.csv');
//Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
