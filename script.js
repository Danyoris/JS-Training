//VARIABLES AND VALUES - ASSIGNMENT

/*1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole


//let country = 'Venezuela';
//let continent = 'South America';
let population =  '2000';

console.log(country);
console.log(continent);
console.log(population);


//DATA TYPES - ASSIGNMENT

1. Declare a variablecalled 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Log the types of 'isIsland','population','country' and 'language' to the console.


let isIsland = 'true';
//let language;
console.lgog(isIsland);
console.log(population);
console.log(country);
console.log(language);

//LET, CONST AND VAR - ASSIGNMENT

1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
2. Think about which variables should be const variables(which values will never change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now,and observe what happens.

const country = 'Venezuela';
const continent = 'South America';
const language = 'Spanish';
console.log(language);
console.log(country);
console.log(continent);

// country = 'Argentina'; IS INMUTABLE CANNOT CHANGE

// BASIC OPERATORS - ASSIGNMENT

1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console.
3. Finland has a population of 6million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does your country have less people than the average country?
5. Based on the variables you created,create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.


let population =  '20';
const country = 'Venezuela';
const continent = 'South America';
const language = 'Spanish';

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);


// STRINGS AND TEMPLATE LITERALS - ASSIGNMENT
1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax.

let population =  '20';
const country = 'Venezuela';
const continent = 'South America';
const language = 'Spanish';

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description2);


// IF / ELSE STATEMENTS - ASSIGNMENT

let population =  '13';
const country = 'Venezuela';

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average`);
}


// TYPE CONVERSION AND COERCION ASSIGNMENT

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// EQUALITY OPERATORS - ASSIGNMENT
const newNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`),
  );

if (newNeighbours === 1) {
  console.log(`Only 1 border`);
} else if (newNeighbours > 1){
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}


// LOGICAL OPERATORS ASSIGNMENT

let population =  '20';
const country = 'Venezuela';
const language = 'Spanish';

if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}


//THE SWITCH STATEMENT ASSIGNMENT

const language = 'Spanish';

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers!`);
    break;
  case 'Spanish':
    console.log(`2nd place in number of native speakers`);
    break;
  case 'english':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log(`Number 4`);
    break;
  case 'arabic':
    console.log(`5th most spoken language`);
    break;
  default: 
    console.log(`Great language too :D`);
}


//THE CONDITIONAL (TERNARY) OPERATOR - ASSIGNMENT

let population =  '20';
const country = 'Venezuela';

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
)


// JS FUNDAMENTALS 2
// FUNCTIONS - ASSIGNMENT

function describeCountry (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descPortugal = describeCountry ('Portugal', 10, 'Lisbon');
const descGermany = describeCountry ('Germany', 83, 'Berlin');
const descFinland = describeCountry ('Finland', 6, 'Helsinki');
console.log(descFinland, descGermany, descPortugal);

// FUNCTION DECLARATIONS vs EXPRESSIONS - ASSIGNMENT

function percentageOfWorld1 (population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1 (10);
const percChina1 = percentageOfWorld1 (1441);
const percUSA1 = percentageOfWorld1 (332);
console.log(percPortugal1, percChina1, percUSA1);


// ARROW FUNCTIONS - ASSIGNMENT

const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3 (10);
const percChina3 =percentageOfWorld3 (1441);
const percUSA3 = percentageOfWorld3 (332);
console.log(percPortugal3, percChina3, percUSA3);

// FUNCTIONS CALLING OTHER FUNCTIONS - ASSIGNMENT

const describePopulation = function (country,population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);


// INTRODUCTION TO ARRAYS - ASSIGNMENT

function percentageOfWorld1 (population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];
console.log(percentages);

// ARRAY METHODS - ASSIGNMENT

const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log ('Probable not a central European country.');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours);

// INTRODUCTION TO OBJECTS - ASIGNMENT

const myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia']
};

// DOT vs BRACKET NOTATION - ASSIGNMENT

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


// OBJECT METHODS - ASSIGNMENT

const myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia'],


  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },

  checkIsland: function () {
    this.isIsland = tis.neighbours.length === 0 ? true : false;
  }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


// ITERATION: THE FOR LOOP - ASSIGNMENT

for (let voter = 1; voter <= 50; voter ++)
  console.log(`Voter number ${voter} is currently voting`);

// LOOPING ARRAYS, BREAKING AND CONTINUING - ASSIGNMENT

function percentageOfWorld1 (population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i ++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);

// LOOPING BACKWARDS AND LOOPS IN LOOPS - ASSIGNMENT
const listOFNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOFNeighbours.length; i++)
  for(let y = 0; y < listOFNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOFNeighbours[i][y]}`);
*/
// THE WHILE LOOP - ASSIGNMENT

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
