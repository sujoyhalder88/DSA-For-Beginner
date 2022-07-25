//Q:1. Write a JavaScript function that reverse a number.
/*
Example x = 32243;
Expected Output : 34223
*/
// function reverse(num) {
//     let ans = num.toString();
//     let result = ans.split("").reverse().join("");
//     return result;
// }
// console.log(reverse(32243));

//=========================xxxxx=============================

//Q:2. Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(str) {
//     let ans = str + "";
//     let result = ans.split("").reverse().join("");
//     if (result == str) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(palindrome(121));

//==============================XXXXXXXXX=======================
//Q:3. Write a JavaScript function that generates all combinations of a string.
/*
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/
// function combinations(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length + 1; j++) {
//             result.push(str.slice(i, j));
//         }
//     }
//     return result;
// }
// console.log(combinations("dog"));
//==========================XXXXXXX===================================
//Q:4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
/*
Example string : 'webmaster'
Expected Output : 'abeemrstw'
*/
/*
function lettersInAlphabeticalOrder(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    let ans = result.sort();
    let join = ans.join("");
    return join;
}
console.log(lettersInAlphabeticalOrder("webmaster"));
*/

// function lettersInAlphabeticalOrder(str) {
//     let result = str.split("").sort().join("");
//     return result;
// }
// console.log(lettersInAlphabeticalOrder("webmaster"));

//============================XXXXXXXX==================================
//Q:5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word
//of the string in upper case
/*
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
// function firstLetterUpperCase(str) {
//     let string = str.split(" ");
//     let occar = [];
//     for (let i = 0; i < string.length; i++) {
//         occar.push(string[i].charAt(0).toUpperCase() + string[i].slice(1));
//     }
//     return occar.join(" ");
// }
// console.log(firstLetterUpperCase("the quick brown fox"));

//========================XXXXXXX============================================
//Q:6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
/*
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/
function longestWord(str) {
    {
        var array1 = str.match(/\w[a-z]{0,}/gi);
        // console.log(array1);
        var result = array1[0];
        // console.log(result);

        for (var x = 0; x < array1.length; x++) {
            // console.log(array1[x]);
            if (result.length < array1[x].length) {
                result = array1[x];
            }
        }
        return result;
    }
}
console.log(longestWord("Web Development Tutorial"));
