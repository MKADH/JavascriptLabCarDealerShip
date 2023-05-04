const {Car} = require("./car");
const {Dealership} = require("./dealership")

describe('Dealership', () => {
    let ChicagoCoupes;
    let yaris;
    let golf;
    beforeEach(() => {
      ChicagoCoupes = Dealership('ChicagoCoupes', 3000, );
      yaris = Car('Toyota', 5000, 'V12');
      golf = Car('Volkswagen', 4500, 'V10');
    });
    test('can calculate total car stock', () => {
      ChicagoCoupes.addCarToDealership(yaris);
      ChicagoCoupes.addCarToDealership(golf);
      expected = 2;
      actual = ChicagoCoupes.numberOfCarsInStock();
      expect(actual).toBe(expected);
    });

});