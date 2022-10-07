function darkestDungeon(arr) {
  let health = 100;
  let money = 0;
  let isKilled = false;
  let bestRoom = 0;
  let splitArr = arr.toString().split("|");
  for (let i = 0; i < splitArr.length; i++) {
    bestRoom++;
    let currentRoom = splitArr[i].toString().split(" ");
    let roomSurprise = currentRoom[0];
    let stats = Number(currentRoom[1]);
    if (roomSurprise === "potion") {
      if (health + stats > 100) {
        // ? If the health plus the stat is over 100 then the heal of the potion is 100 - the total health, but if the health plus the stat is lower
        stats = 100 - health;
        health = 100;
      } else {
        health += stats;
      }
      console.log(`You healed for ${stats} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (roomSurprise === "chest") {
      money += stats;
      console.log(`You found ${stats} coins.`);
    } else {
      health -= stats;
      if (health > 0) {
        console.log(`You slayed ${roomSurprise}.`);
      } else {
        console.log(`You died! Killed by ${roomSurprise}.`);
        isKilled = true;
      }
    }
    if (isKilled) {
      console.log(`Best room: ${bestRoom}`);
      break;
    }
  }
  if (health > 0) {
    console.log("You have made it!");
    console.log(`Coins: ${money}`);
    console.log(`Health: ${health}`);
  }
}
darkestDungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
