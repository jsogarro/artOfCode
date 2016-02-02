/*
1) Create a constructor that has
2) Default year property to 2016 if no year is provided
3) Default checkOil to false
*/

function Car(make, model, color, miles, year) {
    var dateObj = new Date();

    this.make = make;
    this.model = model;
    this.color = color;

    this.checkOil = false;

    if (year) {
        this.year = year;
    } else {
        this.year = date.getFullYear();
    }

    if (miles) {
        this.miles = miles;
    } else {
        this.miles = 0;
    }

    // ternary operator
    // year ? this.year = year : this.year = date.getFullYear();
}

/*
4) add blowHorn method
5) add updateMileage method
6) add checkOilLight method
*/

Car.prototype.blowHorn = function() {
    console.log('Honk Honk!');
}

Car.prototype.updateMileage = function(milesDriven) {
    this.miles += milesDriven;
    this.checkOilLight();
}

Car.prototype.checkOilLight = function() {
   if (this.miles % 1500 === 0) {
       this.checkOil = true;
   }
}

function Dealership(name, address, cars) {
    this.name = name;
    this.address = address;
    this.cars = cars ? cars : [];
}

Dealership.prototype.readOdometer = function(car) {
    return car.miles;
}
