export default class AgeCalculator {
  constructor(userInputAge, userInputLifeExpectancy) {
    this.mercuryAge = userInputAge;
    this.venusAge = userInputAge;
    this.marsAge = userInputAge;
    this.jupiterAge = userInputAge;
    this.lifeExpectancy = userInputLifeExpectancy;
    this.lifeExpectancySurpassedBy = userInputLifeExpectancy;
  }
  calcMercuryAge() {
    this.mercuryAge /= .24;
  }
  calcVenusAge() {
    this.venusAge /= .62;
  }
  calcMarsAge() {
    this.marsAge /= 1.88;
  }
  calcJupiterAge() {
    this.jupiterAge /= 11.86
  }
}