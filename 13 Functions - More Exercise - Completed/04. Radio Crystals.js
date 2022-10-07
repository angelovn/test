function minerals(arr) {
  let targetThickness = arr.shift();
  let chunks = arr.shift();
  let cut = 0;
  let lap = 0;
  let grind = 0;
  let etch = 0;
  let xray = 0;
  while (chunks !== undefined) {
    console.log(`Processing chunk ${chunks} microns`);
    while (chunks !== targetThickness) {
      if (chunks / 4 >= targetThickness) {
        cut++;
        chunks /= 4;
        if (chunks / 4 < targetThickness) {
          console.log(`Cut x${cut}`);
          chunks = Math.floor(chunks);
          console.log(`Transporting and washing`);
        }
        if (chunks === targetThickness) {
          console.log(`Finished crystal ${chunks} microns`);
          cut = 0;
          break;
        }
      } else if (chunks - chunks * 0.2 >= targetThickness) {
        lap++;
        chunks -= chunks * 0.2;
        if (chunks - chunks * 0.2 < targetThickness) {
          console.log(`Lap x${lap}`);
          chunks = Math.floor(chunks);
          console.log(`Transporting and washing`);
        }
        if (chunks === targetThickness) {
          console.log(`Finished crystal ${chunks} microns`);
          lap = 0;
          break;
        }
      } else if (chunks - 20 >= targetThickness) {
        grind++;
        chunks -= 20;
        if (chunks - 20 < targetThickness) {
          console.log(`Grind x${grind}`);
          chunks = Math.floor(chunks);
          console.log(`Transporting and washing`);
        }
        if (chunks === targetThickness) {
          console.log(`Finished crystal ${chunks} microns`);
          grind = 0;
          break;
        }
      } else if (chunks - 2 + 1 >= targetThickness) {
        etch++;
        chunks -= 2;
        if (chunks - 2 + 1 < targetThickness) {
          console.log(`Etch x${etch}`);
          chunks = Math.floor(chunks);
          console.log(`Transporting and washing`);
        }
        if (chunks === targetThickness) {
          console.log(`Finished crystal ${chunks} microns`);
          etch = 0;
          break;
        }
      } else if (chunks < targetThickness) {
        xray++;
        if (xray > 1) {
          chunks += 0;
        } else {
          chunks += 1;
        }
        if (chunks === targetThickness) {
          console.log(`X-ray x${xray}`);
          console.log(`Finished crystal ${chunks} microns`);
          xray = 0;
        }
      }
    }
    chunks = arr.shift();
  }
}
// minerals([1375, 50000]);
minerals([1000, 4000, 8100]);
