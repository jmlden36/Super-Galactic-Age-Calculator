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
  test('should take this.age and divide it by .24 and return that value as a new marsAge key value pair', () => {
    this.age.marsAge();
    expect(myAgeCalculator.marsAge).toEqual(175);
  });    
});