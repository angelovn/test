function extract(str) {
  let path = str.split("\\");
  let token = path.pop().split(".");
  let extension = token.pop();
  let fileName = token.join(".");
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extract("C:\\Internal\\training-internal\\template.bak.n.pptx");

//? other solution
// function extract(str) {
//   let path = str.split("\\");
//   let fileName = path[path.length - 1].split(".");
//   let extension = fileName.pop();
//   console.log(`File name: ${fileName.join(".")}`);
//   console.log(`File extension: ${extension}`);
// }
