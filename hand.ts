import { Card } from "./card";

export class Hand {
  constructor() {}

  static createDesck(cardValue: { [index: string]: number }): Array<Card> {
    const suits = ["clubs", "diamonds", "hearts", "spades"];
    const deck = suits.flatMap((e: string) =>
      Object.keys(cardValue).map((el: string) => new Card(e, el))
    ); // 52 card deck
    return deck
      .slice(0, 5)
      .flatMap(() => deck.splice(Math.floor(Math.random() * deck.length), 1))
      .sort((a, b) => cardValue[a.cardRank] - cardValue[b.cardRank]);
  }
}
