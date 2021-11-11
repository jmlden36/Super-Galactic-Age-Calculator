import AgeCalculator from './../src/js/age-calculator.js';

describe('AgeCalculator', () => {

  test('should correctly create a AgeCalculator object with six key value pairs using the user inputted age', () => {
    let myAgeCalculator = new AgeCalculator(42);
    expect(myAgeCalculator.mercuryAge).toEqual(42);
    expect(myAgeCalculator.venusAge).toEqual(42);
    expect(myAgeCalculator.marsAge).toEqual(42);
    expect(myAgeCalculator.jupiterAge).toEqual(42);
    expect(myAgeCalculator.lifeExpectancy).toEqual(42);
    expect(myAgeCalculator.lifeExpectancySurpassedBy).toEqual(42);
  });  
});