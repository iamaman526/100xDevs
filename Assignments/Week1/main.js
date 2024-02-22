// * *ARRAYS

// let firstName = "aman";
// let isMarried = true;
// let age = 18;

// if (isMarried == true) {
//   console.log(firstName + " is married ");
// } else {
//   console.log(firstName + " is not married");
// }

// let number = 0;
// for (let i = 0; i <= 100; i++) {
//   number = number + i;
//   number++;
// }
// console.log(number);

// TODO 1. Write a program prints all the even numbers in an array

const ages = [21, 22, 23, 24, 26.5, 2.4, 100];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

// TODO 2. Write a program to print the biggest number in an array

let largestno = ages[0];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] > largestno) {
    largestno = ages[i];
  }
}
console.log(largestno);

// TODO 3. Write a program that prints all the male people's first name given a complex object

// // const personArray = ["aman", "yash", "vidya"];
// // const genderArray = ["male", "female", "male"];

// //const numberOfusers = personArray.length;
// //for (let i = 0; i < numberOfusers; i++) {
// //  if (genderArray[i] == "male") {
// //    console.log("The user's first name is: ", personArray[i]);
// //  }
// // }

const allusers1 = [
  {
    firstName: "aman",
    gender: "male",
  },

  { firstName: "yash", gender: "female" },

  { firstName: "vidya", gender: "female" },
];

for (let i = 0; i < allusers1.length; i++) {
  if (allusers1[i]["gender"] === "male") {
    console.log(allusers1[i]["firstName"]);
  }
}
// TODO 4. Write a program that reverses all the elements of an array

const arr = [2, 4, 6, 8, 10, 6];

let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr);

// * * FUNCTIONS

// * * CALLBACKS

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}
function displayResult(data) {
  console.log("Result of the sum is: " + data);
}
function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

const ans = sum(1, 6);
displayResult(ans); // Result of the sum is: 7

// ! You are only allowed to call one function after this
// ! How will you displayResult of a sum

function sum(num1, num2, fnTocall) {
  let result = num1 + num2;
  fnTocall(result);
}
function displayResult(data) {
  console.log("Result of the sum is: " + data);
}
function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

const ans2 = sum(3, 9, displayResult);

// Callbacks are functions passed as arguments to another function. They get executed inside the function where the callback is passed.
// They get executed inside the outer function and can access variables from the outer function's scope.

function calculateArithmetic(a, b, arthimaticTotalFunction) {
  const ans = arthimaticTotalFunction(a, b);
  return ans;

  //   if (type == "sum") {
  //     const value = sum(a, b);
  //     return value;
  //   }

  //   if (type = "minus") {
  //     const value = sub(a, b);
  //     return value;
  //   }
}
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const Value = calculateArithmetic(1, 2, sub);
console.log(`The arithmetic operation returned ${Value}`);



// TODO 1. Write a function that finds the sum of the two numbers
function findSum(a, b) {
  // do something with the input and return an output.
  return a + b;
}

const value = findSum(6, 5);
console.log(value);

// TODO 2. Write another function that displays this reslult in a pretty format.
