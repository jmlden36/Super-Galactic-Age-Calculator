import AgeCalculator from './../src/js/age-calculator.js';

describe('AgeCalculator', () => {
  let myAgeCalculator;
  beforeEach(() => {
    myAgeCalculator = new AgeCalculator(42, 85);
  });


  test('should correctly create a AgeCalculator object with 2 key value pairs, one for age, one for life expectancy', () => {
    expect(myAgeCalculator.age).toEqual(42);
    expect(myAgeCalculator.lifeExpectancyEarth).toEqual(85);   
  });
  test('should take this.age and divide it by .24 and return that value as a new mercuryAge key value', () => {    
    expect(myAgeCalculator.mercuryAge()).toEqual(175);
  });
  test('should take this.age and divide it by .62 and return that value as a new venusAge key value', () => {    
    expect(myAgeCalculator.venusAge()).toEqual(67.74193548387098);
  });
  test('should take this.age and divide it by 1.88 and return that value as a new marsAge key value', () => {    
    expect(myAgeCalculator.marsAge()).toEqual(22.340425531914896);
  });
  test('should take this.age and divide it by 11.86 and return that value as a new jupiterAge key value', () => {    
    expect(myAgeCalculator.jupiterAge()).toEqual(3.5413153456998314);
  });  
});