// * Switch Solution
function month(num) {
  switch (num) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
      break;
  }
}
month(12);

function months(num) {
  if (num === 1) {
    console.log("January");
  } else if (num === 2) {
    console.log("February");
  } else if (num === 3) {
    console.log("March");
  } else if (num === 4) {
    console.log("April");
  } else if (num === 5) {
    console.log("May");
  } else if (num === 6) {
    console.log("June");
  } else if (num === 7) {
    console.log("July");
  } else if (num === 8) {
    console.log("August");
  } else if (num === 9) {
    console.log("September");
  } else if (num === 10) {
    console.log("October");
  } else if (num === 11) {
    console.log("November");
  } else if (num === 12) {
    console.log("December");
  } else {
    console.log("Error!");
  }
}
months(13);
