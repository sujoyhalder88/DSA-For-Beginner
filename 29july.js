//Q:11. Write a JavaScript function which will take an array of numbers stored and find
//the second lowest and second greatest numbers, respectively.
/*
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
function findSecondLowAndGreatestNum(arr) {
    arr.sort((a, b) => a - b);
    let occar = [arr[0]];
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i]) {
            occar.push(arr[i]);
        }
    }
    result.push(occar[1], occar[occar.length - 2]);

    return result.join(",");
}
console.log(findSecondLowAndGreatestNum([5, 4, 3, 1, 2]));
console.log(findSecondLowAndGreatestNum([15, 30, 75, 100, 90]));
