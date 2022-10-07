function arrayManipulations(arr) {
  let numbers = arr.shift().split(" ");
  //   numbers.forEach((el) => Number(el));
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    let [com, number, index] = command.split(" ");
    number = Number(number);
    switch (com) {
      case "Add":
        numbers.push(number);
        break;
      case "Remove":
        //? multiple occurrences of numbers can be removed with filter()
        numbers = numbers.filter((el) => el != number);
        break;
      case "RemoveAt":
        numbers.splice(number, 1);
        break;
      case "Insert":
        index = Number(index);
        numbers.splice(index, 0, number);
        break;
    }
  }
  console.log(numbers.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
