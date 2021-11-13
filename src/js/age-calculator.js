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
  arrayOfAges() {
    let arrayOfAges = [];
    arrayOfAges[0] = this.mercuryAge();
    arrayOfAges[1] = this.venusAge();
    arrayOfAges[2] = this.marsAge();
    arrayOfAges[3] = this.jupiterAge();
    return arrayOfAges;
  }
  arrayOfYearsLeft() {
    let arrayOfYearsLeft = [];
    arrayOfYearsLeft[0] = this.yearsLeft();
    arrayOfYearsLeft[1] = this.yearsLeftMercury();
    arrayOfYearsLeft[2] = this.yearsLeftVenus();
    arrayOfYearsLeft[3] = this.yearsLeftMars();
    arrayOfYearsLeft[4] = this.yearsLeftJupiter();
    return arrayOfYearsLeft;
  }  
  arrayOfYearsSurpassed() {
    let arrayOfYearsSurpassed = [];
    arrayOfYearsSurpassed[0] = this.yearsSurpassed();
    arrayOfYearsSurpassed[1] = this.yearsSurpassedMercury();
    arrayOfYearsSurpassed[2] = this.yearsSurpassedVenus();
    arrayOfYearsSurpassed[3] = this.yearsSurpassedMars();
    arrayOfYearsSurpassed[4] = this.yearsSurpassedJupiter();
    return arrayOfYearsSurpassed;
  }
  youngerOrNot() {
    if (this.age <= this.lifeExpectancyEarth) {
      return this.arrayOfYearsLeft();
    } else {
      return this.arrayOfYearsSurpassed();
    }    
  }  
}


