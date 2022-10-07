function addressBook(arr) {
  let addressBooks = {};
  for (let add of arr) {
    let [name, address] = add.split(":");
    addressBooks[name] = address;
  }
  let ent = Object.entries(addressBooks);
  let sortedEnt = ent.sort(([key1, value1], [key2, value2]) => {
    return key1.localeCompare(key2);
  });
  //? this is also valid !!!sortedEnd = ent.sort();!!!
  //? destructor also works were
  //? This for loop goes through all nested arrays
  for (let [name, address] of sortedEnt) {
    console.log(`${name} -> ${address}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
