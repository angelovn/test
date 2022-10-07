function train(arr) {
  let wagonsWithPassengers = arr.shift().split(" ");
  let copyOf = wagonsWithPassengers.map(Number);
  let maxCapacityWagon = Number(arr.shift());
  for (let i = 0; i < arr.length; i++) {
    let commands = arr[i].split(" ");
    let currentCommand = commands[0];
    let wagonsPassengers = Number(commands[1]);
    if (currentCommand === "Add") {
      copyOf.push(wagonsPassengers);
    } else {
      for (let i = 0; i < copyOf.length; i++) {
        let currentPeople = copyOf[i];
        let currentWagon = Number(currentCommand);
        if (currentPeople + currentWagon <= maxCapacityWagon) {
          let sum = currentPeople + currentWagon;
          copyOf[i] = sum;
          break;
        }
      }
    }
  }
  console.log(copyOf.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
