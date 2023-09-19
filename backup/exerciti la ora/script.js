// function Cat() {
//   Animal.call(this);
// }

// Cat.prototype = Object.assign(Cat.prototype, Animal.prototype);
// Cat.prototype.name = "Miky";
// Cat.prototype.talk = function () {
//   console.log("Meaw Meaw");
// };

// var myCat = new Cat();
// console.log(myCat);
// myCat.talk();

// Cat.prototype = Object.assign(Cat.prototype, Animal.prototype);
// Cat.prototype.name = "Miky";
// Cat.prototype.talk = function () {
//   console.log("Meaw Meaw");
// };
// function Hamster() {
//   Animal.call(this);
// }

// function Hamster() {}
// Hamster.prototype = Object.assign(Hamster.prototype, Animal.prototype);
// Hamster.prototype.name = "Jack, the hamster";
// Hamster.prototype.talk = function () {
//   console.log("kits kits");
// };
// var myHamster = new Hamster();
// console.log(myHamster);
// myHamster.talk();

// function Person() {}
// Person.prototype.legsNr = 2;
// Person.prototype.armsNr = 2;
// Person.prototype.longHair = "black";
// Person.prototype.brownEyes = "brown";

// function Woman() {
//   Person.call(this);
// }
// Woman.prototype = Object.assign(Woman.prototype, Person.prototype);
// Woman.prototype.name = "Alina";
// Woman.prototype.job = function () {
//   console.log("Police Officer");
// };

// function Man() {
//   Person.call(this);
// }
// Man.prototype = Object.assign(Man.prototype, Person.prototype);
// Man.prototype.name = "Marius";
// Man.prototype.job = function () {
//   console.log("Fire Fighter");
// };

// var myWoman = new Woman();
// console.log(myWoman);
// myWoman.job();
// prototype este un obiect de inglobare sau matrita
// asa se cheama o functie

//  new este pentru  monsteirea de la prainte si este considerat classe
//   prin new transform o functie intri classa

// function Animal() {
//   Animal.prototype.legsNr = 4;
//   Animal.prototype.eyesNr = 2;
// Animal.prototype.earsNr = 2;
// }
//  parintele de la care mosteneste plus this
// function Cat() {
//   Animal.call(this);
// }

// Cat.prototype = Object.create(Animal.prototype, Animal.prototype);
// asa se face merge de la target si source

// function Personef() {
//   Personef.prototype.legsNr = 2;
//   Personef.prototype.armsNr = 2;
//   Personef.prototype.longHair = "black";
//   Personef.prototype.brownEyes = "brown";
// }

// function Woman() {
//   Personef.call(this);
// }
// function Woman() {}

//  this este legatura la prototype
//  si metodele si proprietatile si este obiect
// function Person() {}
// Person.prototype.lastName = "Marius";
// function Woman() {
//   Person.call(this);
// }
// function Man(name) {
//   this.firstName = name;
//   Person.call(this);
// }

//  functia general ca Persone   poate sa fie general ca sa tine arms legs etc
//  dar specifica doar pt woman se adaunga in functie direc Woman

// function Vehicla() {}
// Vehicla.prototype.start = function () {
//   this.engine.start();
// };
// Vehicla.prototype.stop = function () {
//   this.engine.stop();
// };
// Vehicla.prototype.drive = function () {
//   this.engine.start();
//   console.log("Engine running:", this.engine.isRunning);
// };

// function Car(name, engine, wheel, wheelNr) {
//   this.name = name;
//   this.engine = engine;
//   this.wheel = wheel;
//   this.wheelNr = wheelNr;
//   Vehicla.call(this);
// }

// Car.prototype = Object.assign(Car.prototype, Vehicla.prototype);

// function Engine() {}

// Engine.prototype.isRunning = false;
// Engine.prototype.start = function () {
//   this.isRunning = true;
// };
// Engine.prototype.stop = function () {
//   this.isRunning = false;
// };

// var myEngine = new Engine();
// var myToyota = new Car("Toyota", myEngine);
// myToyota.drive();
// console.log(myToyota);

//   functia este data pentru utilizare la mai multe masini

// user class creation
// function User(id, name, email) {
//   this.id = id;
//   this.name = name;
//   this.email = email;
// }

// article class
// function Article(name, text, userId) {
//   this.articleName = name;
//   this.content = text;
//   this.userId = userId;
// }

// Blog class

// function Blog() {
// array articole
//   this.articles = [];
// }

// Blog.prototype.addArticle = function (article) {
//   this.articles.push(article);
// };

// // crteate instance of user
// let user1 = new User(1, "Elon Musk", "elon_smecher@yahoo.com");

// create another instance of user
// let user2 = new User(2, "Bill Gates", "bill_gates@yahoo.com");

// create instace for article class by user1
// let article1 = new Article("Weather", "Weather is cloudy", user1.id);
// let article2 = new Article("Food", "Food is good", user1.id);
// let article3 = new Article("Vehicles", "Engines matter", user1.id);
// let article4 = new Article(
//   "Informal School",
//   "We are learning OOP right now",
//   user1.id
// );

// create instance for articl class by user2
// let article5 = new Article("Weather", "Weather is cloudy", user2.id);
// let article6 = new Article("Food", "Food is good", user2.id);
// let article7 = new Article("Vehicles", "Engines matter", user2.id);
// let article8 = new Article(
//   "Informal School",
//   "We are learning OOP right now",
//   user2.id
// );

// instance for blog
// let blog = new Blog();

// call blog method for user1 articles
// blog.addArticle(article1);
// blog.addArticle(article2);
// blog.addArticle(article3);
// blog.addArticle(article4);

// call blog method for user2 articles
// blog.addArticle(article5);
// blog.addArticle(article6);
// blog.addArticle(article7);
// blog.addArticle(article8);

// mare console log pe totalul de articole in blog
// console.log(blog);

// class BookingPlatform {
//   constructor(name) {
//     this.name = name;
//     this.listings = [];
//     this.bookings = [];
//   }
// }
// class BookingPlatform {
//   constructor(name) {
//     this.name = name;
//     this.listings = [];
//     this.bookings = [];
//   }
//   addListing(listing) {
//     this.listings = [...this.listings, listing];
//   }

//   removeListing(listingId) {
//     this.listings = this.listings.filter(
//       (listings) => listings.listingId !== listingId
//     );
//   }

//   listListings() {
//     console.log("Listings: ", this.listings);
//     return this.listings;
//   }

//   searchListings(location, startDate, endDate) {
//     let resultListings = [];
//     for (let i = 0; i < this.listings.length; i++) {
//       if (
//         this.listings[i].location === location &&
//         this.listings[i].startDate >= startDate &&
//         this.listings[i].endDate <= endDate
//       ) {
//         resultListings = [...resultListings, this.listings[i]];
//       }
//     }
//     console.log(resultListings);
//     return resultListings;
//   }

//   addBooking(booking) {
//     this.bookings = [...this.bookings, booking];
//   }

//   cancelBooking(bookingId) {
//     this.bookings = this.bookings.filter(
//       (bookings) => bookings.bookingId !== bookingId
//     );
//   }

//   listBookings() {
//     console.log("Bookings: ", this.bookings);
//     return this.bookings;
//   }
// }

// class PropertyListing {
//   constructor(id, title, location, description, price, availability) {
//     this.id = id;
//     this.title = title;
//     this.location = location;
//     this.description = description;
//     this.price = price;
//     this.availability = availability;
//   }

//   addAvailability(startDate, endDate) {
//     this.startDate = startDate;
//     this.endDate = endDate;
//     this.availability = [{ startDate, endDate }];
//   }
//   isAvailable(startDate, endDate) {
//     const date1 = startDate.split("-");
//     const date2 = endDate.split("-");
//     const parsedStartDate = new Date(
//       date1[2],
//       parseInt(date1[1]) - 1,
//       date1[0]
//     );
//     const parsedEndDate = new Date(date2[2], parseInt(date2[1]) - 1, date2[0]);

//     const listingStartDate = this.startDate.split("-");
//     const listingEndDate = this.endDate.split("-");
//     const availableStartDate = new Date(
//       listingStartDate[2],
//       parseInt(listingStartDate[1]) - 1,
//       listingStartDate[0]
//     );
//     const availableEndDate = new Date(
//       listingEndDate[2],
//       parseInt(listingEndDate[1]) - 1,
//       listingEndDate[0]
//     );
//     if (
//       availableStartDate <= parsedStartDate &&
//       availableEndDate >= parsedEndDate
//     ) {
//       console.log("Period is available");
//       return true;
//     } else {
//       console.log("NOT AVAILABLE");
//       return false;
//     }
//   }
// }

// const availability1 = [];
// const availability2 = [];
// const bookingPlat1 = new BookingPlatform("Booking.ro");
// const listing1 = new PropertyListing(
//   "A15432",
//   "Condo 34",
//   "Toplita",
//   "ce frumos",
//   2000,
//   availability1
// );
// const listing2 = new PropertyListing(
//   "B9047",
//   "Casablanca",
//   "Toplita",
//   "9/10",
//   300,
//   availability2
// );
// const listing3 = new PropertyListing(
//   "C05699",
//   "Revol",
//   "Toplita",
//   "desc",
//   1100,
//   availability1
// );

// bookingPlat1.addListing(listing1);
// bookingPlat1.addListing(listing2);
// bookingPlat1.addListing(listing3);

// listing1.addAvailability("11-02-2024", "20-02-2024");
// listing1.isAvailable("7-02-2024", "12-02-2024");

// bookingPlat1.listListings();

// bookingPlat1.searchListings("Toplita", 10, 22);
// const booking1 = bookingPlat1.searchListings("Toplita", 10, 22)[1];
// bookingPlat1.addBooking(booking1);

// bookingPlat1.listBookings();

// class HotelListing extends PropertyListing {
//   constructor(
//     id,
//     title,
//     location,
//     description,
//     price,
//     availability,
//     roomCount,
//     amenities,
//     rating
//   ) {
//     super(
//       id,
//       title,
//       location,
//       description,
//       price,
//       availability,
//       roomCount,
//       amenities,
//       rating
//     );
//     this.roomCount = roomCount;
//     this.amenities = amenities;
//     this.rating = rating;
//   }
// }

// const hotelListing = new HotelListing(
//   "A15432",
//   "Condo",
//   "Toplita",
//   "ce frumos",
//   2000,
//   availability1,
//   "34",
//   "jaccuzi",
//   "5"
// );
// console.log(hotelListing);

// class VacationRentalListing extends PropertyListing {
//   constructor(
//     id,
//     title,
//     location,
//     description,
//     price,
//     availability,
//     bedroomCount,
//     bathroomCount,
//     hasSwimmingPool
//   ) {
//     super(id, title, location, description, availability, price);
//     this.bedroomCount = bedroomCount;
//     this.hasSwimmingPool = hasSwimmingPool;
//     this.bathroomCount = bathroomCount;
//   }
// }

// const vacation = new VacationRentalListing(
//   "A15432",
//   "Condo",
//   "Toplita",
//   "ce frumos",
//   2000,
//   availability1,
//   "2",
//   "2",
//   true
// );

// hotelListing.addAvailability("11-02-2024", "20-02-2024");
// bookingPlat1.addListing(hotelListing);

// console.log(vacation);

// class Booking {
//   constructor(id, propertyId, guestName, startDate, endDate, totalPrice) {
//     this.id = id;
//     this.propertyId = propertyId;
//     this.guestName = guestName;
//     this.startDate = startDate;
//     this.endDate = endDate;
//     this.totalPrice = totalPrice;
//   }
//   calculateTotalPrice(property) {
//     const date1 = this.startDate.split("-");
//     const date2 = this.endDate.split("-");
//     const parsedStartDate = new Date(
//       date1[2],
//       parseInt(date1[1] - 1),
//       date1[0]
//     );
//     const parsedEndDate = new Date(date2[2], parseInt(date2[1] - 1), date2[0]);
//     const timeDiff = Math.abs(parsedEndDate - parsedStartDate);
//     const numNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

//     this.totalPrice = numNights * property.price;
//     return this.totalPrice;
//   }
// }

// const booking1 = new Booking(
//   "B001",
//   "A15432",
//   "John Smith",
//   "11-02-2024",
//   "20-02-2024",
//   0 // initial total price, will be calculated later
// );

// booking1.calculateTotalPrice(listing1);
// console.log(booking1.totalPrice);

//  BOM
// document.getElementById("pushButton").addEventListener("click", function () {
//   let stateObj = { current: "push" };
//   history.pushState(stateObj, "Pushed Page", "push.html");
//   console.log("Clicked pushButton");
// });

// document.getElementById("replaceButton").addEventListener("click", function () {
//   let stateObj = { current: "replace" };
//   history.replaceState(stateObj, "Replaced Page", "replace.html");
//   console.log("Clicked replaceButton");
// });

// document.getElementById("backButton").addEventListener("click", function () {
//   window.history.back();
//   console.log("Clicked backButton");
// });

// document.getElementById("forwardButton").addEventListener("click", function () {
//   window.history.forward();
//   console.log("Clicked forwardButton");
// });

// window.addEventListener("popstate", function (event) {
//   console.log("Current state:", event.state);
// });

const textElement = document.getElementById("text");

function animateText() {
  const duration = 2000; // Durata animatiei (milisecunde)
  const frames = 60; // Numarul de cadre al animatiei

  let frame = 0;

  // Animatie marire text
  const initialFontSize = 12; // Marimea initiala a textului (in px)
  const targetFontSize = 48; // Marimea finala a textului (in px)
  const fontSizeStep = (targetFontSize - initialFontSize) / frames;

  const animationInterval = setInterval(() => {
    frame++;

    if (frame <= frames) {
      // Animatie marire text
      const currentFontSize = initialFontSize + fontSizeStep * frame;
      textElement.style.fontSize = `${currentFontSize}px`;
    } else {
      clearInterval(animationInterval);
      textElement.style.opacity = 1; // Asigura ca textul sa fie complet vizibil la sfarsitul animatiei
    }
  }, duration / frames);
}

animateText();
