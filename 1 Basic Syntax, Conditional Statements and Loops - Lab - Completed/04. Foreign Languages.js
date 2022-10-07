function languages(countries) {
  if (countries === "England") {
    console.log("English");
  } else if (countries === "USA") {
    console.log("English");
  } else if (countries === "Spain") {
    console.log("Spanish");
  } else if (countries === "Argentina") {
    console.log("Spanish");
  } else if (countries === "Mexico") {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}
languages("Bulgaria");

//* Switch Solution

function language(count) {
  switch (count) {
    case "England":
      console.log("English");
      break;
    case "USA":
      console.log("English");
      break;
    case "Spain":
      console.log("Spanish");
      break;
    case "Mexico":
      console.log("Spanish");
      break;
    case "Argentina":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}
language("England");
language("Spain");
language("Bulgaria");
