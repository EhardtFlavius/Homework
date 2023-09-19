// Crearea clasei utilizatorului
class User {
  constructor(id, name, email, phoneNumber) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.paymentMethods = [];
  }

  register() {
    console.log(`User registered: ${this.name}`);
  }

  login() {
    console.log(`User logged in: ${this.name}`);
  }

  updateProfile(newName) {
    console.log(`Profile updated for ${this.name}. New name: ${newName}`);
    this.name = newName;
  }

  linkPaymentMethod(paymentMethod) {
    this.paymentMethods.push(paymentMethod);
    console.log(`Payment method linked for ${this.name}`);
  }

  viewRideHistory() {
    console.log(`Viewing ride history for ${this.name}`);
  }
}
//  Crearea clasei client
class Customer extends User {
  constructor(id, name, email, phoneNumber) {
    super(id, name, email, phoneNumber);
    this.loyaltyPoints = 0;
  }

  redeemLoyaltyPoints(points) {
    console.log(`Redeeming ${points} loyalty points for ${this.name}`);
  }
}
//  Crearea clasei driver cu extend the user
class Driver extends User {
  constructor(id, name, email, phoneNumber, vehicle, licensePlate) {
    super(id, name, email, phoneNumber);
    this.vehicle = vehicle;
    this.licensePlate = licensePlate;
  }

  register() {
    console.log(`Driver registered: ${this.name}`);
  }

  updateProfile(newName) {
    console.log(`Profile updated for ${this.name}. New name: ${newName}`);
    this.name = newName;
  }

  acceptRideRequest(ride) {
    console.log(`Ride request accepted by ${this.name}. Ride ID: ${ride.id}`);
  }

  cancelRideRequest(ride) {
    console.log(`Ride request cancelled by ${this.name}. Ride ID: ${ride.id}`);
  }

  completeRide(ride) {
    console.log(`Ride completed by ${this.name}. Ride ID: ${ride.id}`);
  }

  viewEarnings() {
    console.log(`Viewing earnings for ${this.name}`);
  }
}
//  Creare clasei ride
class Ride {
  constructor(id, user, driver, pickupLocation, destination) {
    this.id = id;
    this.user = user;
    this.driver = driver;
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.fare = 0;
  }

  requestRide(pickupLocation, destination) {
    console.log(
      `Ride requested by ${this.user.name}. Pickup: ${pickupLocation}, Destination: ${destination}`
    );
  }

  calculateFare() {
    console.log(`Calculating fare for Ride ID: ${this.id}`);
  }

  cancelRide() {
    console.log(`Ride cancelled. Ride ID: ${this.id}`);
  }

  rateDriver(rating, review) {
    console.log(
      `Driver rated by ${this.user.name}. Rating: ${rating}, Review: ${review}`
    );
  }
}
// Creare clasei de plata
class PaymentMethod {
  constructor(id, type, lastFourDigits) {
    this.id = id;
    this.type = type;
    this.lastFourDigits = lastFourDigits;
  }
}

// Creare unui obiect de tip User
const user = new User(
  "1",
  "Ehardt Flavius",
  "zeronomiko@gmail.com",
  "514554877"
);
user.register();
user.login();
user.updateProfile("Marian Ehardt");
user.linkPaymentMethod("PaymentMethod1");
user.viewRideHistory();

// Creare unui obiect de tip Customer care moștenește de la User
const customer = new Customer(
  "2",
  "Gabriela Ehardt",
  "grigor.gabriela.hasdeu@gmail.com",
  "987654321"
);
customer.register();
customer.login();
customer.updateProfile("Alina Ehardt");
customer.linkPaymentMethod("PaymentMethod2");
customer.viewRideHistory();
customer.redeemLoyaltyPoints(100);

// Creare unui obiect de tip Driver care moștenește de la User
const driver = new Driver(
  "3",
  "Darius",
  "Bonda@Gmail.com",
  "555555555",
  "Car",
  "ABC123"
);
driver.register();
driver.login();
driver.updateProfile("Bonda Darius");
driver.linkPaymentMethod("PaymentMethod3");
driver.viewRideHistory();
driver.acceptRideRequest("Ride1");
driver.completeRide("Ride1");
driver.viewEarnings();

// Creare un obiect de tip Ride
const ride = new Ride("Ride1", user, driver, "Location1", "Destination1");
ride.requestRide("Location1", "Destination1");
ride.calculateFare();
ride.cancelRide();
ride.rateDriver(4, "Great ride!");

// Creare un obiect de tip PaymentMethod
const paymentMethod = new PaymentMethod(
  "PaymentMethod1",
  "Credit Card",
  "1234"
);

// Afișarea obiectelor în consolă
console.log(user);
console.log(customer);
console.log(driver);
console.log(ride);
console.log(paymentMethod);
