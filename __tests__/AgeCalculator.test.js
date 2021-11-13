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
  test('should take this.lifeExpectancyEarth and return true if it is greater than or equal to this.userInputAge', () => {
    expect(myAgeCalculator.olderOrNot()).toEqual(true);    
  });
  test('should take this.lifeExpectancyEarth and return false if it is not greater than or equal to this.userInputAge', () => {
    let myAgeCalculator2 = new AgeCalculator(55, 22);
    expect(myAgeCalculator2.olderOrNot()).toEqual(false);    
  }); 
  test('should return the sum of this.lifeExpectancyEarth - this.age', () => {
    expect(myAgeCalculator.yearsLeft()).toEqual(43);
  });
  test('should return the sum of this.age - this.lifeExpectancyEarth', () => {
    expect(myAgeCalculator.yearsSurpassed()).toEqual(-43);
  });
  test('should return the years left to live in mercury years', () => {
    expect(myAgeCalculator.yearsLeftMercury()).toEqual(179.16666666666669);
  });
  test('should return the years surpassed expectancy to live in mercury years', () => {
    let myAgeCalculator2 = new AgeCalculator(55, 22);
    expect(myAgeCalculator2.yearsSurpassedMercury()).toEqual(137.5);
  });
  test('should return the years left to live in venus years', () => {
    expect(myAgeCalculator.yearsLeftVenus()).toEqual(69.35483870967742);
  });
  test('should return the years surpassed expectancy to live in venus years', () => {
    let myAgeCalculator2 = new AgeCalculator(55, 22);
    expect(myAgeCalculator2.yearsSurpassedVenus()).toEqual(53.225806451612904);
  });
  test('should return the years left to live in mars years', () => {
    expect(myAgeCalculator.yearsLeftMars()).toEqual(22.872340425531917);
  });
  test('should return the years surpassed expectancy to live in mars years', () => {
    let myAgeCalculator2 = new AgeCalculator(55, 22);
    expect(myAgeCalculator2.yearsSurpassedMars()).toEqual(17.5531914893617);
  });
  test('should return the years left to live in jupiter years', () => {
    expect(myAgeCalculator.yearsLeftJupiter()).toEqual(3.625632377740304);
  });
  test('should return the years surpassed expectancy to live in jupiter years', () => {
    let myAgeCalculator2 = new AgeCalculator(55, 22);
    expect(myAgeCalculator2.yearsSurpassedJupiter()).toEqual(2.782462057335582);
  });
  test('should create an array of the 4 planet ages', () => {
    expect(myAgeCalculator.arrayOfAges()).toEqual([175, 67.74193548387098, 22.340425531914896, 3.5413153456998314])
  });
  test('should create an array of the 5 planet yearsLeft including Earth', () => {
    expect(myAgeCalculator.arrayOfYearsLeft()).toEqual([43, 179.16666666666669, 69.35483870967742, 22.872340425531917, 3.625632377740304])
  });
  test('should create an array of the 5 planet yearsSurpassed including Earth', () => {
    expect(myAgeCalculator.arrayOfYearsLeft()).toEqual([-43, -179.16666666666669, -69.35483870967742, -22.872340425531917, -3.625632377740304])
  });
});