// class Laptop {
//   info = {};
//   isOn = false;
//   quality = 0;
//   constructor(info, quality) {
//     this.info = {
//       producer: info.producer,
//       age: info.age,
//       brand: info.brand,
//     };
//     this.quality = quality;
//   }
//   turnOn() {
//     this.quality--;
//     this.isOn = true;
//     return this.isOn;
//   }
//   turnOff() {
//     this.quality--;
//     this.isOn = false;
//     return this.isOn;
//   }
//   showInfo() {
//     return JSON.stringify({
//       producer: this.info.producer,
//       age: this.info.age,
//       brand: this.info.brand,
//     });
//   }
//   get price() {
//     return 800 - this.info.age * 2 + this.quality * 0.5;
//   }
// }

class Laptop {
  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
  }
  isOn = false;
  turnOn() {
    this.isOn = true;
    this.quality -= 1;
    return this.isOn;
  }
  turnOff() {
    this.isOn = false;
    this.quality -= 1;
    return this.isOn;
  }
  showInfo() {
    let parsed = JSON.stringify(this.info);
    return parsed;
  }
  get price() {
    return 800 - this.info.age * 2 + this.quality * 0.5;
  }
}
let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

//? a way to get/set the properties of and object. Assign new values to instance properties. Getters and setters are invoked without parenthesis
//* new operator creates {} empty objects and this in the constructor functions points to this empty object

//! The object executing the current function. THIS is the object that owns the JavasScript code
