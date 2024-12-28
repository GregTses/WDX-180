/**
 * 30 Days of JavaScript: Promises and Fetch API exercise
 *
 * Complete the challenges found below!
 *
 * */

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

/**
 * Challenges
 * 1. Read the countries API using fetch & promises and:
 *  - print the name of country, capital, languages, population and area.
 *  - find out the 10 largest countries
 *  - count total number of languages in the world used as officials.
 * 2. Read the cats API using fetch & promises and:
 *  - print out all the cat names in to catNames variable.
 *  - find the average weight of cat in metric unit.
 */

// INSERT YOUR CODE BELOW
function compareNumbers(a, b) {
  return a - b;
}

async function getData() {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    printBasicInfo(json);
    printTenLargest(json);
  } catch (error) {
    console.error(error.message);
  }
}

async function getCatData() {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    // getCatNames(json);
    findAverageWeight(json);
  } catch (error) {
    console.error(error.message);
  }
}

let printBasicInfo = function (json) {
  let lang = [];

  json.forEach((country) => {
    country["languages"].forEach((language) => {
      lang.push(language.name);
    });
    console.log(
      country.name,
      country.capital,
      ...lang,
      country.population,
      country.area
    );
  });
};

let printTenLargest = function (json) {
  json
    .sort(
      (firstcountry, secondcountry) =>
        firstcountry.population - secondcountry.population
    )
    .reverse();
  for (let i = 0; i < 10; i++) {
    console.log(json[i].name);
  }
};

let getCatNames = function (json) {
  let catNames = [];
  json.forEach((cat) => {
    catNames.push(cat.name);
  });
  console.log(...catNames);
};

let findAverageWeight = function (json) {
  let averageWeightArr = [];
  json.forEach((cat) => {
    let weightArr = cat.weight.metric.split(" ");
    averageWeightArr.push((Number(weightArr[2]) + Number(weightArr[0])) / 2);
  });
  let averCatWeight;
  let sum = 0;
  averageWeightArr.forEach((catWeight) => {
    sum += catWeight;
  });
  averCatWeight = sum / averageWeightArr.length;
  console.log(averCatWeight);
};

getCatData();
