var timestampService = require("../src/timestampservice")
var expect= require("chai").expect;

describe("timestampservice", function () {
    it("should convert a unix timestamp to a unix timestamp and natural language representation", function () {
        var inputStr = "1451602800";
        var actual = timestampService.format(inputStr);
        expect(actual).to.exist;
    })
});

describe("timestampservice", function () {
    it("should convert natural language representation to  a unix timestamp to a unix timestamp and natural language representation", function () {
        var inputStr = "Januar 1, 2016";
        var actual = timestampService.format(inputStr);
        expect(actual).to.exist;
    })
});

describe("timestampservice", function () {
    it("should set null if timestamp is not Nature or Unix ", function () {
        var inputStr = "blah blah";
        var actual = timestampService.format(inputStr);
        expect(actual).to.exist;
    })
});