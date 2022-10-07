// ? Normal solve
function loadingBar(percent) {
  let percentage = "%".repeat(percent / 10);
  let battery = ".".repeat(10 - percent / 10);
  if (percent < 100) {
    console.log(`${percent}% [${percentage}${battery}]`);
    console.log("Still loading...");
  } else {
    console.log(`${percent}% Complete!`);
    console.log(`[${percentage}${battery}]`);
  }
}
loadingBar(10);

// ? Loop Solve
// function bar(num) {
//   let battery = "";
//   let str = "";
//   for (let i = num / 10; i < 10; i++) {
//     str += ".";
//   }
//   for (let i = 0; i < num / 10; i++) {
//     battery += "%";
//   }
//   if (num < 100) {
//     console.log(`${num}% [${battery}${str}]`);
//     console.log("Still loading...");
//   } else {
//     console.log(`${num}% Complete!`);
//     console.log(`[${battery}${str}]`);
//   }
// }
// bar(100);
