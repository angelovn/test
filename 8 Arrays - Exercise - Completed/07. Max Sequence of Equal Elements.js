function sequence(arr) {
  let newArray = [];
  let isSequence = true;
  for (let i = 0; i < arr.length; i++) {
    let current = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        current.push(arr[i]);
      } else {
        break;
      }
    }
    if (current.length > newArray.length) {
      newArray = current;
    }
  }
  console.log(newArray.join(" "));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
