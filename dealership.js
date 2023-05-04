const {
    Car,
} = require("./car");

let Dealership = function(name, maxCarAmount){
    this.name = name;
    this.maxCarAmount = maxCarAmount;
    this.carsInStock = [];
};
// Methods
Dealership.prototype.numberOfCarsInStock = function(){
                 return this.carsInStock.length;
};
Dealership.prototype.addCarToDealership = function(){
        for(const Car of Dealership){
                Dealership.carsInStock.push(Car);
                console.log(Dealership.carsInStock);
    };
};
Dealership.prototype.getCarPerManufacturers = function() {
    const manufacturers = [];
        for (const Car of this.carsInStock) {
                manufacturers.push(Car.manufacturer);
            };
    return manufacturers;
};
Dealership.prototype.getCarsByManufacturer = function(manufacturer) {
    for (const Car of Car.carsInStock) {
      if (Car.manufacturer === manufacturer) {
        Car.carsInStock.push(car);
      };
    };
    return Cars;
  };
Dealership.prototype.totalValueOfCars = function() {
    const total = Dealership.carsInStock.reduce((accumulator, Car) => accumulator + Car.price);
                console.log(total);
};


module.export = {
    Dealership,
};