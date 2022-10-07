function solve(baseSide, blockHeight) {
  baseSide = Number(baseSide);
  blockHeight = Number(blockHeight);
  let floor = 0;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  while (baseSide > 1) {
    //? The min space for baseSide can't be one or it will only be one step
    let totalBlocks = baseSide * baseSide * blockHeight;
    let innerBlocks = (baseSide - 2) * (baseSide - 2) * blockHeight;
    let outerBlocks = totalBlocks - innerBlocks;

    if (baseSide - 2 === 0) {
      //? This is if we remove 2 blocks and it is 0 it doesn't have anymore space and we can't calculate the stone and the marble
      break;
    }

    floor++;
    if (floor % 5 === 0) {
      lapis += outerBlocks;
      stone += innerBlocks;
    } else {
      marble += outerBlocks;
      stone += innerBlocks;
    }
    baseSide -= 2;
  }
  floor++;
  height = Math.floor(floor * blockHeight);
  gold += Math.ceil(baseSide * baseSide * blockHeight);

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${height}`);
}
solve(12, 1);
console.log("------------------");
// solve(12, 1);
console.log("------------------");
// solve(11, 0.75);
