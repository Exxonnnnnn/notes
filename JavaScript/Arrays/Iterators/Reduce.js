/**
 * The .reduce() method returns a single value
 * after iterating through the elements of an array.
 * 
 * From mozilla documentation:
 * This method executes a reducer function on each element
 * of the array, resulting in a single output.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * 
 * In the example belowe we have an array of numbers that we
 * want to add up. Yes this could be done in easier ways
 * but this is just an example.
 */

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((num1, num2) => {
    return num1 + num2;
});

console.log(sum); // This will log the following: 10