/** What is an Array in JavaScript?
 * Arrays are a list-like object whose prototype has methods to perform traversal and mutation operations.
 * Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length
 * can change at any time, and data can be stored at non-contiguous locations in teh array JavaScript
 * arrays are not guaranteed to be dense.
 * 
 * Each item in the array is an index. For example if the array's length was 3, you can get each
 * item in the array by doing: arrayName[number]. The number starts at 0, so if your array was
 * const someArray = ['item1', 'item2', 'item3']. If you did someArray[0] it would 
 * be 'item1'.
 * 
 * We can create an array using the let or const keyword (or var, I just never use var).
 * When defining an array using the 'let' keyword you can change the index's of the array
 * and also redfine the array.
 * 
 * When defining an array using the 'const' keyword you can change the index's of the array
 * but you cannot redefine the array.
 */

const someArray = ['item1', 'item2', 'item3'];
console.log(someArray); // This will log the following ['item1', 'item2', 'item3']

// We can now change the index's of this array, and we can also push more to the array using the .push() method (More about that below)
someArray[0] = 'Cat';
someArray[1] = 'Dog';
someArray[2] = 'Fox';
console.log(someArray); // This will log the following ['Cat', 'Dog', 'Fox']

/**
 * Although we can change the items in the array we cannot do the following.
 * Doing this will cause a TypeError (Assignment to a constant variable)
*/
someArray = ['item1', 'item2', 'item3']

let randomArray = ['item1', 'item2', 'item3'];
console.log(randomArray); // This will log the following ['item1', 'item2', 'item3']

/**
 * As well as changing the index's of this array we can also redefine the array
 * We can do this by using the following:
 */
randomArray = ['different', 'array'];
console.log(randomArray); // This will log the following ['different', 'array']


/** Pushing to Arrays
 * You can add items to arrays using the JavaScript .push() method.
 * We access the push method by using dot notation, connecting push to the variable with a period.
 * When we call this method we call it like a function, it can take a single argument or multiple arguments seperated by commas.
 * This method changes (mutates) the array by adding the argument(s) to the end of the array.
 * In this example below we have an array called animals.
 * The array contains three animals, but we want to add two more animals which we will do using the .push() method.
 */

const animals = ['dog', 'cat', 'fox'];

// We now want to add 'horse' and 'snake' to the array using the .push() method.
animals.push('horse', 'snake');
console.log(animals); // This will log the following ['dog', 'cat', 'fox', 'horse', 'snake']