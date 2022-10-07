function houseParty(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    let name = currentCommand[0];
    if (currentCommand.length === 3) {
      if (!list.includes(name)) {
        list.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (currentCommand.length === 4) {
        if (list.includes(name)) {
          list.pop(name);
        } else {
          console.log(`${name} is not in the list!`);
        }
      }
    }
  }
  console.log(list.join("\n"));
}
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
