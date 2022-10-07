function piccolo(arr) {
  let parking = new Set();
  for (let line of arr) {
    let tokens = line.split(", ");
    let direction = tokens[0];
    let carNum = tokens[1];
    if (direction === "IN") {
      parking.add(carNum);
    } else {
      parking.delete(carNum);
    }
  }
  let sorted = Array.from(parking).sort((a, b) => {
    return a.localeCompare(b);
  });
  if (sorted.length > 0) {
    for (let el of sorted) {
      console.log(`${el}`);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
