/*
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

    return filteredNumbers;
    
}
console.log(filterArray([1, 2, 3, 4, 5], 3))
*/

/*
const scores = [61, 19, 74, 35, 92, 56, 611, 195, 351];
const ascendingScores = scores.toSorted();
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
*/

/* 1й варіант
function getUserNames(users) { 
    const usersNames = users.map((user) => user.name);
    return usersNames;
}
*/


const getUserNames = (users) => users.map((user) => user.name);



console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
);