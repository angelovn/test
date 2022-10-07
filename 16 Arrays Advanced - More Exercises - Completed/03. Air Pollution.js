function airPollution(map, forces) {
  let pollutedAreas = [];
  let isPolluted = false;
  for (let i = 0; i < map.length; i++) {
    map[i] = map[i].split(" ").map((el) => Number(el));
  }
  for (let i = 0; i < forces.length; i++) {
    let [force, num] = forces[i].split(" ");
    switch (force) {
      case "breeze":
        let index = Number(num);
        for (let j = 0; j < map[index].length; j++) {
          map[index][j] = map[index][j] - 15;
          if (map[index][j] < 0) {
            map[index][j] = 0;
          }
        }
        break;
      case "gale":
        let ind = Number(num);
        for (let k = 0; k < map.length; k++) {
          map[k][ind] = map[k][ind] - 20;
          if (map[k][ind] < 0) {
            map[k][ind] = 0;
          }
        }
        break;
      case "smog":
        let value = Number(num);
        for (let row = 0; row < map.length; row++) {
          for (let col = 0; col < map[row].length; col++) {
            map[row][col] = map[row][col] + value;
            if (map[row][col] < 0) {
              map[row][col] = 0;
            }
          }
        }
        break;
    }
  }
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] >= 50) {
        pollutedAreas.push(`[${row}-${col}]`);
        isPolluted = true;
      }
    }
  }
  if (isPolluted) {
    console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}
airPollution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
