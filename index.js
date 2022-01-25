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

const isAnagram = function (string1, string2) {
  let val1 = string1.toLowerCase();
  let val2 = string2.toLowerCase();
  let string1Arr = val1.split("");
  let string2Arr = val2.split("");
  let isAnagram = true;
  let sortVal1;
  let sortVal2;
  for (let i = 0; i < string1Arr.length; i++) {
    for (let j = i + 1; j < string1Arr.length; j++) {
      if (string1Arr[i] > string1Arr[j]) {
        sortVal1 = string1Arr[i];
        string1Arr[i] = string1Arr[j];
        string1Arr[j] = sortVal1;
      }
    }
    for (let i = 0; i < string2Arr.length; i++) {
      for (let j = i + 1; j < string2Arr.length; j++) {
        if (string2Arr[i] > string2Arr[j]) {
          sortVal2 = string2Arr[i];
          string2Arr[i] = string2Arr[j];
          string2Arr[j] = sortVal2;
        }
      }
    }
  }
  string1Arr.join("");
  string2Arr.join("");

  for (let k = 0; k < string1Arr.length; k++) {
    if (string1Arr[k] === string2Arr[k]) {
      console.log(string1Arr[k], "&", string2Arr[k], "*");
      isAnagram = true;
    } else {
      isAnagram = false;
    }
  }
  console.log(
    `both strings ${isAnagram ? "are anagrams" : "are not anagrams"}`
  );
};

isAnagram("So dark the con of man", "Madonna of the Rocks");
// isAnagram("Things are good", "Dogs eat ants");

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
