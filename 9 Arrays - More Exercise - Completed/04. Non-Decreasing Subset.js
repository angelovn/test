function nonDecreasing(arr) {
  let max = arr[0];
  let result = arr.filter((el) => {
    // ? it creates a new array and filters through it to find if some condition is true and if it is it pushes the new elements into the new array
    if (el >= max) {
      max = el;
    }
    return el >= max; // ? We need to return something from the function so the filter knows what to put in the array for the next time
  });
  console.log(result.join(" "));
}
nonDecreasing([20, 3, 2, 15, 6, 1]);
