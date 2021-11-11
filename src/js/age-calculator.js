export default class AgeCalculator {
  constructor(userInputAge, userInputLifeExpectancy) {
    this.age = userInputAge;
    this.lifeExpectancyEarth = userInputLifeExpectancy;    
  }
  mercuryAge() {
    return this.age / .24;
  }
  venusAge() {
    return this.age / .62;
  }
  marsAge() {
    return this.age / 1.88;
  }
  jupiterAge() {
    return this.age / 11.86;
  }
  olderOrNot() {
    if (this.lifeExpectancyEarth >= this.age) {
      return true;
    } else {
      return false;
    }
  }
  yearsLeft() {
    return this.lifeExpectancyEarth - this.age;
  }
  yearsSurpassed() {
    return  this.age - this.lifeExpectancyEarth;
  }
}


