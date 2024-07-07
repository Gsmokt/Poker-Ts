import { cardValue, rank, Search, Hand, Card } from "./all";

class Deck {
  hand: Array<Card>; //5 random cards
  cardValue: { [index: string]: number } = cardValue;
  rank: { [index: string]: number } = rank;
  createDeck() {
    this.hand = new Hand().createDesck(this.cardValue);
  }
  result() {
    // Check all ranks
    let truth = 0;
    const colors = this.hand.every((e: Card) => e.suit === this.hand[0].suit);
    const value1 = this.hand.map((e: Card) => e.cardRank);
    const straight = value1.join(",");
    const value2 = [...new Set(value1)]
      .map((el) => value1.filter((e) => e === el))
      .sort((a, b) => a.length - b.length);
    for (let i = 0; i <= 3; i++) {
      this.cardValue[this.hand[i].cardRank] -
        this.cardValue[this.hand[i + 1].cardRank] ===
      -1
        ? truth++
        : null;
    }
    return new Search().pull(
      this.cardValue,
      this.hand,
      truth,
      colors,
      value2,
      straight
    );
  }
}
const poker = new Deck();
poker.createDeck();
console.log(poker.hand);
console.log(poker.result());
