//Day 6 Tasks
/*
// Task 1
/* a) Write a constructor for the class Movie, which takes a
    String representing the title of the movie, a String representing the studio,
    and a String representing the rating as its arguments,
    and sets the respective class properties to these values.
*/
console.log("TASK - 1");
console.log("----------------X--------------X---------------");
console.log("Task 1 a)- creating a constructor for the class Movie");
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const a = new Movie("Vikram", "RKFS", "8.5");
console.log(a.title, a.studio, a.rating);
console.log("----------------X--------------X---------------");

//Task 1
/*  b) The constructor for the class Movie will set
    the class property rating to "PG"
    as default when no rating is provided.
*/
console.log("Task 1 b)- class property rating to 'PG' as default");
class Movie1 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const b = new Movie1(
  "Harry Potter and the Sorcerer's Stone (2001)",
  "Warner Bros."
);
console.log(b.title, b.studio, b.rating);
console.log("----------------X--------------X---------------");

//task 1
/* c) Write a method getPG, which takes an array of base type Movie
as its argument, and returns a new array of only those movies in the
input array with a rating of "PG". You may assume the input array
is full of Movie instances. The returned array need not be full.
*/
console.log("Task 1 c)- method getPG  with a rating of 'PG' ");
class Movie2 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

// Create an array of Movie instances
const movies = [
  new Movie2("Movie1", "Studio1", "PG"),
  new Movie2("Movie2", "Studio2", "PG-13"),
  new Movie2("Movie3", "Studio3", "PG"),
  new Movie2("Movie4", "Studio4", "R"),
  new Movie2("Movie5", "Studio5", "PG"),
];

Movie2.getPG(movies).forEach((movie) => console.log(movie.title));

console.log("----------------X--------------X---------------");
/*d) Write a piece of code that creates an instance of the
class Movie with the title “Casino Royale”,
the studio “Eon Productions”, and the rating “PG­13”
*/
console.log(
  "Task 1 d)- class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating PG­13"
);
class Movie3 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const c = new Movie3("Casino Royale", "Eon Productions", "PG­13");
console.log(c.title, c.studio, c.rating);
console.log("----------------X--------------X---------------");

//Task 2
console.log("TASK - 2 -->Circle - Class");
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get Radius() {
    return this.radius;
  }
  set Radius(n) {
    this.radius = n;
  }
  get Color() {
    return this.color;
  }
  set Color(c) {
    this.color = c;
  }
  get toString() {
    return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
}
const circle = new Circle(1.2, "red");
console.log(circle.radius, circle.color);
console.log(circle.color);
console.log(circle.toString);
console.log(`Circle Radius - ${circle.area}`);
console.log(`Circle Circumfernce - ${circle.circumference}`);
circle.Radius = "5";
console.log(circle.radius);
circle.Color = "White";
console.log(circle.color);
console.log(circle.toString);

console.log("----------------X--------------X---------------");

//Task 3-->Write a “person” class to hold all the detail
console.log("Task - 3-->Person deatils in a class");
class Person {
  constructor(Name, age, gender, maritalstatus, contact, email) {
    this.name = Name;
    this.age = age;
    this.gender = gender;
    this.maritalstatus = maritalstatus;
    this.contact = contact;
    this.email = email;
  }
}
const obj = new Person(
  "Praveen",
  22,
  "Male",
  "No",
  1234567890,
  "abc@gmail.com"
);
console.log(
`  Name - ${obj.name},
  Age - ${obj.age},
  Gender - ${obj.gender},
  Marital Status - ${obj.maritalstatus},
  Contact - ${obj.contact},
  E-Mail - ${obj.email}
`
);
console.log("----------------X--------------X---------------");

// Task -4 --> write a class to calculate the Uber price.
console.log("Task - 4 --> write a class to calculate the Uber price.");
class Uber {
  constructor(Price, Kms) {
    this.Price = Price;
    this.distance = Kms;
  }
  set price(p) {
    this.Price = p;
  }
  get price() {
    return this.Price;
  }
  set calculate(distance) {
    this.distance = distance;
  }
  get calculate() {
    return this.distance * this.Price;
  }
}

const uber = new Uber();
uber.calculate = 20;
uber.price = 7;
console.log(
  ` Price = ${uber.price} Rupees , Kilometer = ${uber.distance} kms `
);
console.log(`Total Price = ${uber.calculate}`);

// //Session Task
// class car {
//   constructor(companyname, model, milage, color, price, safety, type, section) {
//     this.companyname = companyname;
//     this.model = model;
//     this.milage = milage;
//     this.color = color;
//     this.price = price;
//     this.safety = safety;
//     this.type = type;
//     this.section = section;
//   }
// }
// const obj1 = new car(
//   "BMW",
//   "x5",
//   "10 KM/lit",
//   "Black",
//   "80Lakhs",
//   "4.5 Star",
//   "Hybird-(Electric/Petrol)",
//   "Sedan"
// );
// console.log(
//   obj1.companyname,
//   obj1.model,
//   obj1.milage,
//   obj1.color,
//   obj1.price,
//   obj1.safety,
//   obj1.type,
//   obj1.section
// );
