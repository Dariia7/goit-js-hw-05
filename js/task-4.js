/*
const getTotalBalanceByGender = (users, gender) => users.filter((user) => user.gender === gender).reduce((acc, element) => acc + element.balance,0)



const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863
*/

/*
const total = [2, 7, 3].reduce((previousValue, number) => {
    console.log("acc",previousValue)
    console.log("element",number)
  return [...previousValue,number + 3];
},[]);

console.log(total); // 12
*/
const arrNumber = [4, 5, 3, 1, 2]; 

/*
const reverseArray = (arr) => arr.map((elem, idx, currentArr) => { 
    console.log("index,", idx);

    console.log("currentInx", currentArr.length - 1 - idx);
    
  return   currentArr[currentArr.length - 1 - idx] 
});

console.log(reverseArray(arrNumber));

*/

/*
const reverseSecondArr = (arr) => arr.reverse();
console.log(reverseSecondArr(arrNumber));
console.log(arrNumber);

*/

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

/*
function removeItems(arr) {
  const filteredArr = arr.filter(item => item);
  return filteredArr; 
}

console.log(removeItems([0, 1, false, 2, undefined, '', 3, null]));
*/

// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, 3, 1, 2,"a"] => [1, 2, 3,"a"]
function removeItems(arr) {
  const newArr = arr.filter((item, index, currentArr) => currentArr.indexOf(item) === index);
  return newArr; 
}
console.log(removeItems(["a", 1, 2, 3, 1, 2, "a"]));



//
// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false

// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]


