import { Card } from "./card";

export class Search {
  constructor() {}

  pull(
    cardValue: { [index: string]: number },
    hand: Array<Card>,
    truth: number,
    colors: boolean,
    value2: Array<Array<string>>,
    straight: string
  ) {
    let win;
    switch (true) {
      case cardValue[hand[0].cardRank] === 10 && truth === 4 && colors:
        win = "Royal Flush!";
        break;
      case truth === 4 && colors:
        win = `Straight Flush - Flush of: ${hand[0].suit} and Straight of: ${straight}`;
        break;
      case value2.length === 2 && value2.some((e) => e.length === 4):
        win = `Four kind of: ${value2[value2.length - 1][0]}`;
        break;
      case value2.length === 2 && value2.some((e) => e.length === 3):
        win = `Full house - Three kind of: ${
          value2[value2.length - 1][0]
        } and Two kind of: ${value2[0][0]}`;
        break;
      case colors:
        win = `Flush of: ${hand[0].suit}`;
        break;
      case truth === 4:
        win = `Straight of: ${straight}`;
        break;
      case value2.length === 3 && value2.some((e) => e.length === 3):
        win = `Three kind of a: ${value2[value2.length - 1][0]}`;
        break;
      case value2.length === 3 && value2.some((e) => e.length === 2):
        win = `Two pairs of: ${value2[value2.length - 1][0]} and ${
          value2[1][0]
        }`;
        break;
      case value2.length === 4:
        win = `Pair of: ${value2[value2.length - 1][0]}`;
        break;
      case value2.length === 5:
        win = `Hight card! : ${hand[hand.length - 1].cardRank}`;
        break;
    }

    return win;
  }
}
