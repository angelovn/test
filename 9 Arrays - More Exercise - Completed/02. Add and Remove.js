function addAndRemove(arr) {
  let startingNum = 1;
  let newArr = [];
  for (const commands of arr) {
    if (commands === "add") {
      newArr.push(startingNum);
    } else {
      newArr.pop(startingNum);
    }
    startingNum++;
  }
  if (newArr.length === 0) {
    console.log("Empty");
  }
  console.log(newArr.join(" "));
}
addAndRemove(["add", "add", "add", "add"]);
