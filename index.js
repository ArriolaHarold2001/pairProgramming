"use strict";
// console.log("+++++++++++++++ EVEN ODD SORT");
let inputArray1 = [2, 4, 7, 11, 15, 16];
let evenArr = [];
let oddArr = [];

function evenOdd(emptyArray) {
  let evenCounter = 0;
  let oddCounter = 0;
  for (let i = 0; i < emptyArray.length; i++) {
    if (emptyArray[i] % 2 === 0) {
      evenArr[evenCounter] = emptyArray[i];
      evenCounter++;
    } else {
      oddArr[oddCounter] = emptyArray[i];
      oddCounter++;
    }
  }
  // console.log(evenArr, "EVEN");
  // console.log(oddArr, "ODD");
}

evenOdd(inputArray1);

// console.log("+++++++++++++++ PRIMES");

const isPrime = function (primes) {
  let newArr = [];
  let counter = 0;
  loop1: for (let i = 0; i < primes.length; i++) {
    for (let j = 2; j < primes[i]; j++) {
      if (primes[i] % j === 0) {
        continue loop1;
      }
    }
    if (primes[i] > 1) {
      newArr[counter] = primes[i];
      counter++;
    }
  }
  console.log(newArr);
};

// isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// isPrime([10, 18, 19, 29, 33, 35, 47, 66, 83]);

const vowelChecker = function (x) {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let isVowel;
  const val = x.toLowerCase();
  for (let i = 0; i < vowelArray.length; i++) {
    if (val === vowelArray[i]) {
      isVowel = true;
      break;
    } else {
      isVowel = false;
    }
  }
  console.log(`${val} ${isVowel ? "is a vowel" : "is not a vowel"}`);
};
// vowelChecker("B");
// vowelChecker("a");
// vowelChecker("e");
// vowelChecker("i");
// vowelChecker("F");
// vowelChecker("o");
// vowelChecker("u");

// Create a function that accepts two strings, then determines whether
//  or not the first string is an anagram of the second string by returning a boolean.

const specialCase = function (string1) {
  const specialCases = [",", ".", "/", "?", "]", "[", "{", "}", "+", " "];
  let newString1;
  for (let i = 0; i < string1.length; i++) {
    newString1 = string1.replaceAll(specialCases[i], "");
  }
  return newString1;
};

const isAnagram = function (string1, string2) {
  let isA;
  const stringIn1 = string1.toLowerCase().split("").sort().join("");
  const stringIn2 = string2.toLowerCase().split("").sort().join("");
  specialCase(stringIn1);
  specialCase(stringIn2);
  for (let i = 0; i < string1.length; i++) {
    console.log(stringIn1);
    console.log(stringIn2);
    if (stringIn1 === stringIn2) {
      isA = true;
    } else {
      isA = false;
    }
  }
  console.log(`Anagram: ${isA}`);
};
isAnagram("So dark the con of man", "Madonna of the Rocks");
// isAnagram("Things are good", "Dogs eat ants");
// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.

const getGCD = function (x, y) {
  if (y === 0) {
    console.log(x);
  } else {
    let num = y;
    y = x % y;
    x = num;
    getGCD(x, y);
  }
};

// getGCD(336, 360);
// getGCD(78, 126);

// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.

const car = {
  make: "Ram",
  model: "Big Horn",
  year: 2016,
  mileage: 160,
  color: "Silver",
  driveToWork: function (x) {
    const newMileage = this.mileage + x;
    console.log(`you started with ${this.mileage} now you have ${newMileage}`);
  },
  driveAroundTheWorld: function () {
    const newMileage = this.mileage + 100000;
    console.log(`you started with ${this.mileage} now you have ${newMileage}`);
  },
  runErrands: function (numberOfErrands) {
    const newMileage = this.mileage + 10 * numberOfErrands;
    console.log(
      `you started with ${this.mileage} now you have ${newMileage} after visiting ${numberOfErrands} places`
    );
  },
};

// car.driveToWork(100);
// car.driveAroundTheWorld();
// car.runErrands(100);

// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value

/* ******************************************************* */
// Create a function that takes in an Array of numbers
// example: let nums = [1,2,3,4,5,6,7]
// Inside the function do a for loop on the passed in array
// Inside the for loop have a condition that checks to see if the number 5 exists in the array and console log it if it does.
// Finally call that function with the passed in array.

// const numCheck = function (numArr) {
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] === 5) {
//       console.log(numArr[i]);
//     }
//   }
// };

// numCheck([1, 2, 3, 4, 5, 6, 7]);
