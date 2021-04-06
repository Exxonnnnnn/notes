/**
 * The some() method tests whether at least one
 * element in the array passes the test implemented
 * by the provided function. It returns true if it finds
 * an element for which the provided function returns true
 * otherwise it will return false. This method does not
 * modify the array.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 * 
 * In the example below, we have an array of words and we want to see if
 * at least one word has a character count of 5 or more.
 */

const words = ['dog', 'cat', 'fox', 'horse', 'elephant', 'snake', 'cheetah'];

const check = words.some(word => word.length >= 5);

console.log(check); // This will log the following: true