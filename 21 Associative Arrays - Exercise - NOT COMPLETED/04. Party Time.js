function partyTime(arr) {
  let vip = [];
  let normal = [];
  let isParty = false;
  for (let code of arr) {
    if (code === "PARTY") {
      isParty = true;
      continue;
    }
    let firstCh = code[0];
    if (!isParty) {
      if (isNaN(firstCh)) {
        normal.push(code);
      } else {
        vip.push(code);
      }
    } else {
      if (isNaN(firstCh)) {
        let index = normal.indexOf(code);
        normal.splice(index, 1);
      } else {
        let index = vip.indexOf(code);
        vip.splice(index, 1);
      }
    }
  }
  let length = vip.length + normal.length;
  console.log(length);
  for (let code of vip) {
    console.log(code);
  }
  for (let code of normal) {
    console.log(code);
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
