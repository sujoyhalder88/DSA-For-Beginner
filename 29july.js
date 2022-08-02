//Q:11. Write a JavaScript function which will take an array of numbers stored and find
//the second lowest and second greatest numbers, respectively.
/*
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

// function findSecondLowAndGreatestNum(arr) {
//     arr.sort((a, b) => a - b);
//     let occar = [arr[0]];
//     let result = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] == arr[i]) {
//             occar.push(arr[i]);
//         }
//     }
//     result.push(occar[1], occar[occar.length - 2]);

//     return result.join(",");
// }
// console.log(findSecondLowAndGreatestNum([5, 4, 3, 1, 2]));
// console.log(findSecondLowAndGreatestNum([15, 30, 75, 100, 90]));

//============================XXXXXXX=======================================
//Q:12. Write a JavaScript function which says whether a number is perfect.
/*
According to Wikipedia : In number theory, a perfect number is a positive integer that
 is equal to the sum of its proper positive divisors, that is, the sum of its positive
  divisors excluding the number itself (also known as its aliquot sum). Equivalently, 
  a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : 
The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
 and 1 + 2 + 3 = 6. Equivalently,
  the number 6 is equal to half the sum of all its 
  positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
  The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
// function perfactNumber(num) {
//     let store = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i == 0) {
//             store += i;
//         }
//     }
//     if (num == store && store !== 0) {
//         return "Perfact Number";
//     } else {
//         return "Not Perfact Number";
//     }
// }
// console.log(perfactNumber(48));

//======================XXXXXX=========================
//Q:13. Write a JavaScript function to compute the factors of a positive integer.

/* function factors(n) {
    var num_factors = [];

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            num_factors.push(i);
            if (n / i !== i) num_factors.push(n / i);
        }
    num_factors.sort((x, y) => x - y); // numeric sort
    return num_factors;
}
console.log(factors(15)); // [1,3,5,15]
// console.log(factors(16)); // [1,2,4,8,16]
// console.log(factors(17)); // [1,17] */

//========================XXXXXX==========================================
//Q:14. Write a JavaScript function to convert an amount to coins
/*
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/
// function amountTocoins(target, coinArr) {
//     let solution = [];
//     for (let i = 0; i < coinArr.length; i++) {
//         while (coinArr[i] <= target) {
//             solution.push(coinArr[i]);
//             target -= coinArr[i];
//         }
//     }
//     return solution;
// }
// let arr = [25, 10, 5, 2, 1];
// console.log(amountTocoins(46, arr));
