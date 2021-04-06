/**
 * When the .map() is called on an array, it takes an argument
 * of a callback function and returns a new array. This method
 * works similar to the .forEach() method however this one 
 * returns a new array.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * In the example below we have an array of numbers. We want to
 * double each number again like we did with the .forEach() method.
 */

let numbers = [1, 4, 23, 87, 25, 98];

numbers = numbers.map(number => {
    return number * 2;
});

console.log(numbers);

/** This will log the following:
 * [2, 8, 46, 174, 50, 196]
 */
