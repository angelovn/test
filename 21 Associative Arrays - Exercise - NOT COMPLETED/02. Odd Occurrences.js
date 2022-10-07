function oddOccurrences(arr) {
  let dic = {};
  let newArr = arr.split(" ");
  let value = 1;
  for (let el of newArr) {
    let newEl = el.toLowerCase();
    if (!dic.hasOwnProperty(newEl)) {
      dic[newEl] = value;
    } else {
      let old = dic[newEl];
      dic[newEl] = old + 1;
    }
  }
  let buff = "";
  for (let el in dic) {
    let value = dic[el];
    if (value % 2 !== 0) {
      buff += ` ${el}`;
    }
  }
  console.log(buff);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

//? OBJECTS SORT NUMBERS IN THE TOP, BUT MAP IS NORMAL
