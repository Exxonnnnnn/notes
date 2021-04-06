/**
 * The .forEach() method is useful for when you want to execute the same
 * code for each element of an Array.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 
 * In the basic example below we have an Array of numbers and want to loop through each
 * number in the Array to see what the number is when doubled. We will then console log the result
 */

const numbers = [1, 4, 23, 87, 25, 98];

numbers.forEach(number => {
    console.log(`${number} x 2 = ${number * 2}`);
});

/** This will log the following:
 * "1 x 2 = 2"
 * "4 x 2 = 8"
 * "23 x 2 = 46"
 * "87 x 2 = 174"
 * "25 x 2 = 50"
 * "98 x 2 = 196"
 */

// You can also do it like this:
numbers.forEach(number => console.log(`${number} x 2 = ${number * 2}`));