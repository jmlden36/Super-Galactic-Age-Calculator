export default class AgeCalculator {
  constructor(userInputAge, userInputLifeExpectancy) {
    this.age = userInputAge;
    this.lifeExpectancyEarth = userInputLifeExpectancy;    
  }
  mercuryAge() {
    return this.age / .24;
  }
  venusAge() {
    return this.age / .62
  }
  marsAge() {
    return this.age / 1.88
  }
}


