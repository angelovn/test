function miner(arr) {
  let resources = new Map();
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    let minerals = arr[i];
    let quantity = Number(arr[i + 1]);
    if (!resources.has(minerals)) {
      resources.set(minerals, quantity);
    } else {
      let old = resources.get(minerals);
      resources.set(minerals, old + quantity);
    }
  }
  let ordered = Array.from(resources);
  for (let [name, quantity] of ordered) {
    console.log(`${name} -> ${quantity}`);
  }
}
miner(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
