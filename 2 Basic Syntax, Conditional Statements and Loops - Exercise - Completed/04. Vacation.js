function vacation(group, occupations, day) {
  let price = 0;
  if (day === "Friday" && occupations === "Students") {
    price = 8.45;
  } else if (day === "Saturday" && occupations === "Students") {
    price = 9.8;
  } else if (day === "Sunday" && occupations === "Students") {
    price = 10.46;
  } else if (day === "Friday" && occupations === "Business") {
    price = 10.9;
  } else if (day === "Saturday" && occupations === "Business") {
    price = 15.6;
  } else if (day === "Sunday" && occupations === "Business") {
    price = 16;
  } else if (day === "Friday" && occupations === "Regular") {
    price = 15;
  } else if (day === "Saturday" && occupations === "Regular") {
    price = 20;
  } else if (day === "Sunday" && occupations === "Regular") {
    price = 22.5;
  }
  if (occupations === "Students" && group >= 30) {
    price *= 0.85; // ? When you want to see only the discount use the smaller percent and when you want to see the item with the discount use the bigger percent
  } else if (occupations === "Business" && group >= 100) {
    group -= 10; //? It's good when not sure to do things 1 by one
  } else if (occupations === "Regular" && group >= 10 && group <= 20) {
    price *= 0.95;
  }
  let total = price * group;
  console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(100, "Business", "Saturday");
