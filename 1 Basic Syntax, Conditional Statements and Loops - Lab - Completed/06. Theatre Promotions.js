function theatre(day, age) {
  if (age >= 0 && age <= 18) {
    if (day === "Weekday") {
      console.log("12$");
    } else if (day === "Weekend") {
      console.log("15$");
    } else {
      console.log("5$");
    }
  } else if (age > 18 && age <= 64) {
    if (day === "Weekday") {
      console.log("18$");
    } else if (day === "Weekend") {
      console.log("20$");
    } else {
      console.log("12$");
    }
  } else if (age > 64 && age <= 122) {
    if (day === "Weekday") {
      console.log("12$");
    } else if (day === "Weekend") {
      console.log("15$");
    } else {
      console.log("10$");
    }
  } else {
    console.log("Error!");
  }
}
theatre("Weekday", 42);
theatre("Holiday", -12);
theatre("Holiday", 15);

// * Switch Solution
function show(day, age) {
  if (age >= 0 && age <= 18) {
    switch (day) {
      case "Weekday":
        console.log("12$");
        break;
      case "Weekend":
        console.log("15$");
        break;
      case "Holiday":
        console.log("5$");
        break;
    }
  } else if (age > 18 && age <= 64) {
    switch (day) {
      case "Weekday":
        console.log("18$");
        break;
      case "Weekend":
        console.log("20$");
        break;
      case "Holiday":
        console.log("12$");
        break;
    }
  } else if (age > 64 && age <= 122) {
    switch (day) {
      case "Weekday":
        console.log("12$");
        break;
      case "Weekend":
        console.log("15$");
        break;
      case "Holiday":
        console.log("10$");
        break;
    }
  } else {
    console.log("Error!");
  }
}
show("Weekday", 42);
show("Holiday", -12);
show("Holiday", 15);

//* Another If Solution
function tea(day, age) {
  if (age > 0 && age <= 18 && day === "Weekday") {
    console.log("12$");
  } else if (age > 0 && age <= 18 && day === "Weekend") {
    console.log("15$");
  } else if (age > 0 && age <= 18 && day === "Holiday") {
    console.log("5$");
  } else if (age > 18 && age <= 64 && day === "Weekday") {
    console.log("18$");
  } else if (age > 18 && age <= 64 && day === "Weekend") {
    console.log("20$");
  } else if (age > 18 && age <= 64 && day === "Holiday") {
    console.log("12$");
  } else if (age > 64 && age <= 122 && day === "Weekday") {
    console.log("12$");
  } else if (age > 64 && age <= 122 && day === "Weekend") {
    console.log("15$");
  } else if (age > 64 && age <= 122 && day === "Holiday") {
    console.log("10$");
  } else {
    console.log("Error!");
  }
}
tea("Weekday", 42);
tea("Holiday", -12);
tea("Holiday", 15);
