export default class AgeCalculator {
  constructor(userInputAge, userInputLifeExpectancy) {
    this.age = userInputAge;
    this.lifeExpectancyEarth = userInputLifeExpectancy;    
  }
  marsAge() {
    this.marsAge = this.age / .24;
  }
}


