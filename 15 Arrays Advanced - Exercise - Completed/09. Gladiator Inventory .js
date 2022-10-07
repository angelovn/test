function gladiator(arr) {
  let inventory = arr.shift().split(" ");
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    let [operation, ...rest] = command.split(" ");
    let equipment = rest[0];
    switch (operation) {
      case "Buy":
        if (!inventory.includes(equipment)) {
          inventory.push(equipment);
        }
        break;
      case "Trash":
        if (inventory.includes(equipment)) {
          let i = inventory.indexOf(equipment);
          inventory.splice(i, 1);
        }
        break;
      case "Repair":
        if (inventory.includes(equipment)) {
          let i = inventory.indexOf(equipment);
          inventory.splice(i, 1);
          inventory.push(equipment);
        }
        break;
      case "Upgrade":
        let up = rest.shift().split("-");
        if (inventory.includes(up[0])) {
          let i = inventory.indexOf(up[0]);
          inventory.splice(i + 1, 0, `${up[0]}:${up[1]}`);
        }
        break;
    }
  }
  console.log(`${inventory.join(" ")}`);
}
gladiator([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
console.log("----------------------");
// gladiator([
//   "SWORD Shield Spear",
//   "Trash Bow",
//   "Repair Shield",
//   "Upgrade Helmet-V",
// ]);
