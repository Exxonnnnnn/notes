/**
 * The every() method test whether all elements
 * in the array pass the test implemented by the provided
 * function. This returns a boolean value.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * 
 * In the example below, we have an array of words and we want to see if
 * every word has a character 
 */

const words = ['dog', 'cat', 'fox', 'horse', 'elephant', 'snake', 'cheetah'];

const check = words.every(word => word.length >= 5);

console.log(check); // This will log the following: false