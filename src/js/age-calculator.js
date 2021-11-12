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
    return this.age - this.lifeExpectancyEarth;
  }
  yearsLeftMercury() {
    return this.yearsLeft() / .24;
  }
  yearsSurpassedMercury() {
    return this.yearsSurpassed() / .24;
  }
  yearsLeftVenus() {
    return this.yearsLeft() / .62;
  }
  yearsSurpassedVenus() {
    return this.yearsSurpassed() / .62;
  }
  yearsLeftMars() {
    return this.yearsLeft() / 1.88;
  }
  yearsSurpassedMars() {
    return this.yearsSurpassed() / 1.88;
  }
  yearsLeftJupiter() {
    return this.yearsLeft() / 11.86;
  }
  yearsSurpassedJupiter() {
    return this.yearsSurpassed() / 11.86;
  }
}


