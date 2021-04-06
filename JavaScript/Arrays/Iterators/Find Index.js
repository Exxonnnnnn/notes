/**
 * The .findIndex() method will return the index of the
 * first element that evaluates to true in the callback
 * function.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * 
 * In this example below we have an array of animals and 
 * we want to return the first animal where the character
 * count is longer than 5.
 */

const words = ['dog', 'cat', 'fox', 'horse', 'elephant', 'snake', 'cheetah'];

const animal = words.findIndex(animal => animal.length > 5);
console.log(animal); // This will log the following: 4
console.log(words[animal]); // This will log the following: "elephant"

// Again, we can also do the .findIndex() method like this:
const animal = words.findIndex(animal => {
    return animal.length > 5;
});