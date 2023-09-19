class BookingPlatform {
  constructor(name) {
    this.name = name;
    this.listings = [];
    this.bookings = [];
  }
  addListing(listing) {
    this.listings = [...this.listings, listing];
  }

  removeListing(listingId) {
    this.listings = this.listings.filter(
      (listings) => listings.listingId !== listingId
    );
  }

  listListings() {
    console.log("Listings: ", this.listings);
    return this.listings;
  }

  searchListings(location, startDate, endDate) {
    let resultListings = [];
    for (let i = 0; i < this.listings.length; i++) {
      if (
        this.listings[i].location === location &&
        this.listings[i].startDate >= startDate &&
        this.listings[i].endDate <= endDate
      ) {
        resultListings = [...resultListings, this.listings[i]];
      }
    }
    console.log(resultListings);
    return resultListings;
  }

  addBooking(booking) {
    this.bookings = [...this.bookings, booking];
  }

  cancelBooking(bookingId) {
    this.bookings = this.bookings.filter(
      (bookings) => bookings.bookingId !== bookingId
    );
  }

  listBookings() {
    console.log("Bookings: ", this.bookings);
    return this.bookings;
  }
}

class PropertyListing {
  constructor(id, title, location, description, price, availability) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.description = description;
    this.price = price;
    this.availability = availability;
  }

  addAvailability(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.availability = [{ startDate, endDate }];
  }
  isAvailable(startDate, endDate) {
    const date1 = startDate.split("-");
    const date2 = endDate.split("-");
    const parsedStartDate = new Date(
      date1[2],
      parseInt(date1[1]) - 1,
      date1[0]
    );
    const parsedEndDate = new Date(date2[2], parseInt(date2[1]) - 1, date2[0]);

    const listingStartDate = this.startDate.split("-");
    const listingEndDate = this.endDate.split("-");
    const availableStartDate = new Date(
      listingStartDate[2],
      parseInt(listingStartDate[1]) - 1,
      listingStartDate[0]
    );
    const availableEndDate = new Date(
      listingEndDate[2],
      parseInt(listingEndDate[1]) - 1,
      listingEndDate[0]
    );
    if (
      availableStartDate <= parsedStartDate &&
      availableEndDate >= parsedEndDate
    ) {
      console.log("Period is available");
      return true;
    } else {
      console.log("NOT AVAILABLE");
      return false;
    }
  }
}

const availability1 = [];
const availability2 = [];
const bookingPlat1 = new BookingPlatform("Booking.ro");
const listing1 = new PropertyListing(
  "A15432",
  "Condo 34",
  "Toplita",
  "ce frumos",
  2000,
  availability1
);
const listing2 = new PropertyListing(
  "B9047",
  "Casablanca",
  "Toplita",
  "9/10",
  300,
  availability2
);
const listing3 = new PropertyListing(
  "C05699",
  "Revol",
  "Toplita",
  "desc",
  1100,
  availability1
);

bookingPlat1.addListing(listing1);
bookingPlat1.addListing(listing2);
bookingPlat1.addListing(listing3);

listing1.addAvailability("11-02-2024", "20-02-2024");
listing1.isAvailable("7-02-2024", "12-02-2024");

bookingPlat1.listListings();

// bookingPlat1.searchListings("Toplita", 10, 22);
// const booking1 = bookingPlat1.searchListings("Toplita", 10, 22)[1];
// bookingPlat1.addBooking(booking1);

bookingPlat1.listBookings();

class HotelListing extends PropertyListing {
  constructor(
    id,
    title,
    location,
    description,
    price,
    availability,
    roomCount,
    amenities,
    rating
  ) {
    super(
      id,
      title,
      location,
      description,
      price,
      availability,
      roomCount,
      amenities,
      rating
    );
    this.roomCount = roomCount;
    this.amenities = amenities;
    this.rating = rating;
  }
}

const hotelListing = new HotelListing(
  "A15432",
  "Condo",
  "Toplita",
  "ce frumos",
  2000,
  availability1,
  "34",
  "jaccuzi",
  "5"
);
console.log(hotelListing);

class VacationRentalListing extends PropertyListing {
  constructor(
    id,
    title,
    location,
    description,
    price,
    availability,
    bedroomCount,
    bathroomCount,
    hasSwimmingPool
  ) {
    super(id, title, location, description, availability, price);
    this.bedroomCount = bedroomCount;
    this.hasSwimmingPool = hasSwimmingPool;
    this.bathroomCount = bathroomCount;
  }
}

const vacation = new VacationRentalListing(
  "A15432",
  "Condo",
  "Toplita",
  "ce frumos",
  2000,
  availability1,
  "2",
  "2",
  true
);

hotelListing.addAvailability("11-02-2024", "12-02-2024");
bookingPlat1.addListing(hotelListing);

console.log(vacation);

class Booking {
  constructor(id, propertyId, guestName, startDate, endDate, totalPrice) {
    this.id = id;
    this.propertyId = propertyId;
    this.guestName = guestName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = totalPrice;
  }
  calculateTotalPrice(property) {
    const date1 = this.startDate.split("-");
    const date2 = this.endDate.split("-");
    const parsedStartDate = new Date(
      date1[2],
      parseInt(date1[1] - 1),
      date1[0]
    );
    const parsedEndDate = new Date(date2[2], parseInt(date2[1] - 1), date2[0]);
    const timeDiff = Math.abs(parsedEndDate - parsedStartDate);
    const numNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    this.totalPrice = numNights * property.price;
    return this.totalPrice;
  }
}

const booking1 = new Booking(
  "B001",
  "A15432",
  "John Smith",
  "11-02-2024",
  "20-02-2024"
);

booking1.calculateTotalPrice(listing1);
console.log(booking1.totalPrice);
console.log(booking1);
