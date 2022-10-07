function ladyBug(arr) {
  let sizeOfField = arr[0];
  let initialIndexes = arr[1];
  initialIndexes = initialIndexes.split(" ");
  let commands = arr.slice(2);
  let field = [];
  for (let i = 0; i < sizeOfField; i++) {
    field.push(0);
  }
  for (let i = 0; i < initialIndexes.length; i++) {
    let position = Number(initialIndexes[i]);
    if (position > field.length - 1) {
      continue;
    }
    field[position] = 1;
  }
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i];
    currentCommand = currentCommand.split(" ");
    let position = Number(currentCommand[0]);
    let direction = currentCommand[1];
    let flyCount = Number(currentCommand[2]);
    if (field[position] === 0 || position < 0 || position > field.length - 1) {
      continue;
    }
    field[position] = 0;
    if (flyCount < 0) {
      direction = direction === "right" ? "left" : "right";
      flyCount = Math.abs(flyCount);
    }
    let nextPosition = 0;
    if (direction === "right") {
      nextPosition = position + flyCount;
    } else if (direction === "left") {
      nextPosition = position - flyCount;
    }
    while (field[nextPosition] === 1) {
      if (direction === "right") {
        nextPosition += flyCount;
      } else if (direction === "left") {
        nextPosition -= flyCount;
      }
    }
    if (nextPosition > field.length - 1 || nextPosition < 0) {
      continue;
    }
    field[nextPosition] = 1;
  }
  console.log(field.join(" "));
}
ladyBug([3, "0 1", "0 right 1", "2 right 1"]);

//  let field = [];
//  let fieldSize = arr.shift();
//  for (let i = 0; i < fieldSize; i++) {
//    field.push(0);
//  }
//  let indexBugs = arr.shift().split(" ");
//  for (let bugs of indexBugs) {
//    field.splice(Number(bugs), 1, 1);
//  }
//  console.log(field);
//  let inEl = "";
//  for (let el of field) {
//    inEl += `${el} `;
//  }
//  console.log(`${inEl} - Initial field`);
//  let com = arr.shift();
//  while (com !== undefined) {
//    let [startPoint, command, endPoint] = com.split(" ");
//    let start = Number(startPoint);
//    let end = Number(endPoint);
//    switch (command) {
//      case "right":
//        for (let i = start; i <= end; i++) {
//          if (field[start] === 0 || start < 0 || start > field.length - 1) {
//            continue;
//          }
//        }
//        field[start] = 0;
//        break;
//      case "left":
//        break;
//    }
//    let afterCommand = "";
//    for (let el of field) {
//      afterCommand += `${el} `;
//    }
//    console.log(
//      `${afterCommand} - field after "${
//        startPoint + " " + command + " " + endPoint
//      }"`
//    );
//    com = arr.shift();
//  }
