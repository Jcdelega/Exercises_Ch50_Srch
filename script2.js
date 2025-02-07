/* Exercise #2 (suggested map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] */

const doubleArray = (arr) => {
    const map1 = arr.map((x) => x * 2);
    console.log(map1);
}

doubleArray([1, 2, 3, 4, 5]);
const myArr = [2, 3, 5, 7, 11];
doubleArray(myArr);
