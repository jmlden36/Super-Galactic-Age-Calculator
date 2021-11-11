export default class AgeCalculator {
  constructor(userInputAge, userInputLifeExpectancy) {
    this.age = userInputAge;
    this.lifeExpectancyEarth = userInputLifeExpectancy;    
  }
  marsAge() {
    return this.age / .24;
  }
  venusAge() {
    return this.age / .62
  }
}


