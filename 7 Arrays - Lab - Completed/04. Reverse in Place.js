function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    //? to find the center of an array divide the its length by / 2
    let temp = arr[i]; // ? to not lose the number
    let previous = arr.length - 1 - i; // ? to not lose the number and iterate through all the numbers
    arr[i] = arr[previous]; // ? swap with the variable
    arr[previous] = temp; // ? swap with the other variable
  }
  console.log(arr.join(" "));
}
reverse(["a", "b", "c", "d", "e"]);
