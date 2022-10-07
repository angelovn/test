function arrRotations(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let switch1 = arr.shift(arr[i]);
    let switch2 = arr.push(switch1);
  }
  console.log(arr.join(" "));
}
arrRotations([51, 47, 32, 61, 21], 2);
