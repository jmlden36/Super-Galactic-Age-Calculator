import AgeCalculator from './../src/js/age-calculator.js';

describe('AgeCalculator', () => {
  let myAgeCalculator;
  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(42, 85);
  });


  test('should correctly create a AgeCalculator object with six key value pairs', () => {
    expect(myAgeCalculator.mercuryAge).toEqual(175);
    expect(myAgeCalculator.venusAge).toEqual(67.74193548387098);
    expect(myAgeCalculator.marsAge).toEqual(22.340425531914896);
    expect(myAgeCalculator.jupiterAge).toEqual(3.5413153456998314);
    expect(myAgeCalculator.lifeExpectancy).toEqual(85);
    expect(myAgeCalculator.lifeExpectancySurpassedBy).toEqual(85);
  });
});