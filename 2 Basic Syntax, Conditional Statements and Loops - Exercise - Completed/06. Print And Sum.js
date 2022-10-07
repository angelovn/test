function sum(start, end) {
  let sum = 0;
  let printLine = ""; //? When i want to write something on the same line i 1st create a empty string
  for (let i = start; i <= end; i++) {
    sum += i;
    printLine += `${i} `; //? The 2nd step is attach the thing i want to be on 1 line to the empty string with an empty space
  }
  console.log(printLine);
  console.log(`Sum: ${sum}`);
}
sum(5, 10);
