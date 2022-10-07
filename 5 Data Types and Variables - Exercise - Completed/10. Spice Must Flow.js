function spice(resource) {
  let yield = resource;
  let extracted = 0;
  let days = 0;
  let miners = 26;
  let sum = 0;
  while (yield >= 100) {
    extracted = yield;
    if (extracted > miners) {
      extracted -= miners;
    }
    yield -= 10;
    sum += extracted;
    days++;
  }
  console.log(days);
  if (days !== 0) {
    console.log(sum - 26);
  } else {
    console.log(sum);
  }
}
spice(111);
