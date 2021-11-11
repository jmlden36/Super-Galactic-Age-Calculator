export default class AgeCalculator {
  constructor(userInputAge, userInputLifeExpectancy) {
    this.mercuryAge = userInputAge / .24;
    this.venusAge = userInputAge / .62;
    this.marsAge = userInputAge / 1.88;
    this.jupiterAge = userInputAge / 11.86;
    this.lifeExpectancy = userInputLifeExpectancy;
    this.lifeExpectancySurpassedBy = userInputLifeExpectancy;
  }  
}