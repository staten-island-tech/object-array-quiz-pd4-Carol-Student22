const inventors = [
  { first: "Albert", last: "Einstein", year: 1897, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

/// 'LastName, FirstName'
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Wick",
  "Beecher, Henry",
  "Beethoven, Lugwig",
  "Begin, Menachem",
  "Belloc, Hilarie",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, PEter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrel, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

/// Array.prototype.filer()
/// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; //keep it
  } ///return false is not required
});
console.table(fifteen);
/* Simplified Method: const fifteen = inventors.filter(inventor => (inventor.year >=1500 && inventor.year <= 1599));
 */

//Array.prototype.map() --> returns the same amount of items that is given
/// 2. Give us an array fo the inventory first and last names
const fullNames = inventors.map((inventor) => inventor.first + inventor.last);
console.log(fullNames);

/// Array.prototype.sort() --> sorting a set # of items
/// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(function (firstPerson, secondPerson) {
  if (firstPerson.year > secondPerson.year) {
    return 1;
  } else {
    return -1;
  }
});
/* Simplified Method: const ordered = inventors.sort(
  (firstPerson, secondPerson) => (firstPerson.year > secondPerson.year ? 1 : -1) /// '?' --> if true; ':' --> else
);
*/
console.table(ordered);

/// Array.prototype.reduce()
/// 4. How many years did all the inventors live
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

///5. Sort the inventors by years lived
const oldest = inventors.sort(function (firstPerson, secondPerson) {
  const lastGuy = firstPerson.passed - firstPerson.year;
  const nextGuy = secondPerson.passed - secondPerson.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

/// 6. Create a list of Boulevards in paris that contain 'de' anywhere in the name
/// http://en.wikipedia.org/wiki/Category:Boulevards_in_Paris ==> Peform in Console
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelector("a"));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

/// 7. Sort Exercise
//Sort the people alphebetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? -1 : 1;
});
console.log(alpha);

/// 8 . Reduce Exercise
const data = [
  "car",
  "car",
  "truck",
  " truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportaion = data.reduce(function (obj, item) {
  if (!obj[item]) {
    ///! ==> if false/no...
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportaion);
