function commonEl(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    if (arr2.includes(arr1[i])) {
      console.log(current);
    }
  }
}
commonEl(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
