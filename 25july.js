//Q:7. Write a JavaScript function that accepts a string as a parameter and counts
//the number of vowels within the string.
/*
Example string : 'The quick brown fox'
Expected Output : 5
*/

// function vowelsCheck(str) {
//     let upper = str.toUpperCase();
//     let count = 0;
//     let vowel = "AEIOU";
//     for (let i = 0; i < upper.length; i++) {
//         if (vowel.indexOf(upper[i]) !== -1) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(vowelsCheck("THE QUICK BROWN FOX"));
// console.log(vowelsCheck("the quick brown fox"));

//====================XXXXXXX==================================
//Q:8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
// function checkPrime(num) {
//     let check = Math.sqrt(num);
//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     } else {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return "Not a Prime number";
//             } else if (num % check == 0) {
//                 return "Not a Prime number";
//             } else {
//                 return "It's a Prime number";
//             }
//         }
//     }
// }
// console.log(checkPrime(121));
//==============================XXXXXX===================================

//Q:9. Write a JavaScript function which accepts an argument and returns the type.

// function checkType(num) {
//     let result = typeof num;
//     return result;
// }
// console.log(checkType([]));

//===============================XXXXXX===================================

//Q:10. Write a JavaScript function which returns the n rows by n columns identity matrix.

// function matrix(num) {
//     for (let i = 0; i < num; i++) {
//         for (let j = 0; j < num; j++) {
//             if (i === j) {
//                 console.log("1");
//             } else {
//                 console.log("0");
//             }
//         }
//         console.log("\n");
//     }
// }
// matrix(4);
