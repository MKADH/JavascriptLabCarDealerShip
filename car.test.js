const{Car, yaris, golf,} = require("./car");

describe('Car', () => {
    const yaris = new Car('Toyota', 5000, 'V12');
    test ('can display manufacturer for first car', () => {
        expected = 'Toyota';
        actual = yaris.manufacturer;
        expect(actual).toBe(expected);
    });
    test ('can display price for second car', () => {
        expected = 5000;
        actual = yaris.price;
        expect(actual).toBe(expected);
    });
    test ('can display engineType for second car', () => {
        expected = 'V12';
        actual = yaris.engineType;
        expect(actual).toBe(expected);
    });
});