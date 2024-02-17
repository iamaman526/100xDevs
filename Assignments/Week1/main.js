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

const ages = [21, 22, 23, 24, 26.5, 2.4];

let largestno = ages[0];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] > largestno) {
    largestno = ages[i];
    
  }
 
}
console.log( largestno);