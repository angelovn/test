function phoneBook(arr) {
  let phoneDic = {};
  for (let names of arr) {
    let [name, age] = names.split(" ");
    phoneDic[name] = age;
  }
  for (let keys in phoneDic) {
    console.log(`${keys} -> ${phoneDic[keys]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
