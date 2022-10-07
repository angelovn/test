function cards(arr) {
  let enumCardPower = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
  };
  let enumCardType = {
    "S": 4,
    "H": 3,
    "D": 2,
    "C": 1,
  };
  let players = new Map();
  for (let people of arr) {
    let tokens = people.split(": ");
    let names = tokens.shift();
    let decksStr = tokens[0];
    let deckArr = decksStr.split(", ");
    if (!players.has(names)) {
      players.set(names, new Set());
    }
    for (let card of deckArr) {
      //? The key behind the name is THE EMPTY NEW SET()
      players.get(names).add(card);
    }
  }
  for (let [key, value] of players) {
    let sum = 0;
    for (let card of value) {
      let cardInfo = card.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");
      let cardPowerAsNumber = enumCardPower[cardPower];
      let cardTypeAsNumber = enumCardType[cardType];
      sum += cardPowerAsNumber * cardTypeAsNumber;
    }
    console.log(`${key}: ${sum}`);
  }
}
cards([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
