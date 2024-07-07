"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var all_1 = require("./all");
var Deck = /** @class */ (function () {
    function Deck() {
        this.cardValue = all_1.cardValue;
        this.rank = all_1.rank;
    }
    Deck.prototype.createDeck = function () {
        this.hand = new all_1.Hand().createDesck(this.cardValue);
    };
    Deck.prototype.result = function () {
        var _this = this;
        // Check all ranks
        var truth = 0;
        var colors = this.hand.every(function (e) { return e.suit === _this.hand[0].suit; });
        var value1 = this.hand.map(function (e) { return e.cardRank; });
        var straight = value1.join(",");
        var value2 = __spreadArray([], __read(new Set(value1)), false).map(function (el) { return value1.filter(function (e) { return e === el; }); })
            .sort(function (a, b) { return a.length - b.length; });
        for (var i = 0; i <= 3; i++) {
            this.cardValue[this.hand[i].cardRank] -
                this.cardValue[this.hand[i + 1].cardRank] ===
                -1
                ? truth++
                : null;
        }
        return new all_1.Search().pull(this.cardValue, this.hand, truth, colors, value2, straight);
    };
    return Deck;
}());
var poker = new Deck();
poker.createDeck();
console.log(poker.hand);
console.log(poker.result());
