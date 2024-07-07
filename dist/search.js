"use strict";
exports.__esModule = true;
exports.Search = void 0;
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.prototype.pull = function (cardValue, hand, truth, colors, value2, straight) {
        var win;
        switch (true) {
            case cardValue[hand[0].cardRank] === 10 && truth === 4 && colors:
                win = "Royal Flush!";
                break;
            case truth === 4 && colors:
                win = "Straight Flush - Flush of: ".concat(hand[0].suit, " and Straight of: ").concat(straight);
                break;
            case value2.length === 2 && value2.some(function (e) { return e.length === 4; }):
                win = "Four kind of: ".concat(value2[value2.length - 1][0]);
                break;
            case value2.length === 2 && value2.some(function (e) { return e.length === 3; }):
                win = "Full house - Three kind of: ".concat(value2[value2.length - 1][0], " and Two kind of: ").concat(value2[0][0]);
                break;
            case colors:
                win = "Flush of: ".concat(hand[0].suit);
                break;
            case truth === 4:
                win = "Straight of: ".concat(straight);
                break;
            case value2.length === 3 && value2.some(function (e) { return e.length === 3; }):
                win = "Three kind of a: ".concat(value2[value2.length - 1][0]);
                break;
            case value2.length === 3 && value2.some(function (e) { return e.length === 2; }):
                win = "Two pairs of: ".concat(value2[value2.length - 1][0], " and ").concat(value2[1][0]);
                break;
            case value2.length === 4:
                win = "Pair of: ".concat(value2[value2.length - 1][0]);
                break;
            case value2.length === 5:
                win = "Hight card! : ".concat(hand[hand.length - 1].cardRank);
                break;
        }
        return win;
    };
    return Search;
}());
exports.Search = Search;
