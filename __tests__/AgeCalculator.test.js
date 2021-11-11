import AgeCalculator from './../src/js/age-calculator.js';

describe('AgeCalculator', () => {
  let myAgeCalculator;
  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(42, 85);
  });


  test('should correctly create a AgeCalculator object with six key value pairs', () => {
    expect(myAgeCalculator.mercuryAge).toEqual(42);
    expect(myAgeCalculator.venusAge).toEqual(42);
    expect(myAgeCalculator.marsAge).toEqual(42);
    expect(myAgeCalculator.jupiterAge).toEqual(42);
    expect(myAgeCalculator.lifeExpectancy).toEqual(85);
    expect(myAgeCalculator.lifeExpectancySurpassedBy).toEqual(85);
  });
  test('should take user inputted integer, divide it by .24 and assign that value to mercuryAge', () => {
    myAgeCalculator.calcMercuryAge();
    expect(myAgeCalculator.mercuryAge).toEqual(175);
  });
});