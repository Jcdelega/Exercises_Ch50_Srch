/* Exercise #3 (suggested reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

const sumAndProductFromAnArray = arr => {
  let initialIndex = 0;
  const sumWithIndex = arr.reduce(
  (summ, valueIndex) => summ + valueIndex,initialIndex,
  );
  initialIndex = 1;
  const productWithIndex = arr.reduce(
  (product , valueIndex) => (product * valueIndex),initialIndex,
  );
  return `From array [${arr}] Sum equals to ${sumWithIndex} and Product equals to ${productWithIndex}`;
}
const array = [1, 2, 3, 4, 5];
const array1 = [2, 3, 7, 11, 13];
console.log(sumAndProductFromAnArray(array));
console.log(sumAndProductFromAnArray(array1));