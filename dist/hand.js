"use strict";
exports.__esModule = true;
exports.Hand = void 0;
var card_1 = require("./card");
var Hand = /** @class */ (function () {
    function Hand() {
    }
    Hand.prototype.createDesck = function (cardValue) {
        var suits = ["clubs", "diamonds", "hearts", "spades"];
        var deck = suits.flatMap(function (e) {
            return Object.keys(cardValue).map(function (el) { return new card_1.Card(e, el); });
        }); // 52 card deck
        return deck
            .slice(0, 5)
            .flatMap(function () { return deck.splice(Math.floor(Math.random() * deck.length), 1); })
            .sort(function (a, b) { return cardValue[a.cardRank] - cardValue[b.cardRank]; });
    };
    return Hand;
}());
exports.Hand = Hand;
