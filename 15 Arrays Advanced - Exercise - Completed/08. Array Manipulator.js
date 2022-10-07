//?? WATCH OUT FOR PARAMETERS AND ARGUMENTS ARE THEY 2 SEPARATE ONES OR ARE THEY IN 1 ARRAY
function arrayManipulator(arr, com) {
  let startArr = arr.slice(0);
  let isPrinted = false;
  for (let i = 0; i < com.length; i++) {
    let commands = com[i];
    let [operation, ...rest] = commands.split(" ");
    let index = 0;
    let element = 0;
    let position = 0;
    let output = [];
    switch (operation) {
      case "add":
        index = Number(rest[0]);
        element = Number(rest[1]);
        startArr.splice(index, 0, element);
        break;
      case "addMany":
        index = Number(rest.shift());
        for (let i = rest.length - 1; i >= 0; i--) {
          startArr.splice(index, 0, Number(rest[i]));
        }
        break;
      case "contains":
        element = Number(rest[0]);
        if (startArr.includes(element)) {
          console.log(startArr.indexOf(element));
        } else {
          console.log(-1);
        }
        break;
      case "remove":
        index = Number(rest[0]);
        startArr.splice(index, 1);
        break;
      case "shift":
        position = Number(rest[0]);
        for (let i = 0; i < position; i++) {
          let el = startArr.shift();
          startArr.push(el);
        }
        break;
      case "sumPairs":
        if (startArr.length % 2 === 0) {
          for (let k = 0; k < startArr.length - 1; k += 2) {
            output.push(startArr[k] + startArr[k + 1]);
          }
        } else {
          for (let k = 0; k < startArr.length - 1; k += 2) {
            output.push(startArr[k] + startArr[k + 1]);
          }
          output.push(startArr.pop());
          //? to push the last remaining number which hasn't got any to pairs to pair with
        }
        startArr = output;
        output = [];
        break;
      case "print":
        isPrinted = true;
        console.log(`[ ${startArr.join(", ")} ]`);
        break;
    }
    if (isPrinted) {
      break;
    }
  }
}
console.log("----------------");
arrayManipulator([6, 6, 6], ["sumPairs"]);
// arrayManipulator([
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"],
// ]);
// console.log("----------------------------");
// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );
//* WATCH OUT FOR PARAMETERS AND ARGUMENTS ARE THEY 2 SEPARATE ONES OR ARE THEY IN 1 ARRAY
