function bitcoin(minedGold) {
  let oneGramGold = 67.51;
  let oneBitcoin = 11949.16;
  let days = 0;
  let bitcoin = 0;
  let sum = 0;
  let bitCoinDay = 0;
  for (let i = 0; i <= minedGold.length - 1; i++) {
    days++;
    let goldMinedDay = minedGold[i];
    if (days % 3 === 0) {
      goldMinedDay *= 0.7;
    }
    let goldExchange = goldMinedDay * oneGramGold;
    sum += goldExchange;
    while (sum >= oneBitcoin) {
      bitcoin++;
      sum -= oneBitcoin;
      if (bitcoin === 1) {
        // ? With this you check only for the first bitCoin
        bitCoinDay = days;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitCoinDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${bitCoinDay}`);
  }
  console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124]);
