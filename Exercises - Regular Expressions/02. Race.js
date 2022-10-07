function race(arr) {
  let nameMap = new Map();
  let arrNames = arr.shift().split(", ");
  arrNames.forEach((person) => {
    nameMap.set(person, 0);
  });
  let pattern = /[A-Za-z]+/gm;
  let digitsPattern = /\d/gm;
  for (let index = 0; index < arr.length; index++) {
    let currentEl = arr[index];
    if (currentEl === "end of race") {
      break;
    }
    let name = currentEl.match(pattern).join("");
    let distance = currentEl.match(digitsPattern).reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
    if (nameMap.has(name)) {
      let oldDistance = nameMap.get(name);
      oldDistance += distance;
      nameMap.set(name, oldDistance);
    }
  }
  let sortedNames = Array.from(nameMap).sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(`1st place: ${sortedNames[0][0]}`);
  console.log(`2nd place: ${sortedNames[1][0]}`);
  console.log(`3rd place: ${sortedNames[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
