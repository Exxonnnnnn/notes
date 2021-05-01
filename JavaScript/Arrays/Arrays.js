/** What is an Array in JavaScript?
 * Arrays are a list-like object whose prototype has methods to perform traversal and mutation operations.
 * Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length
 * can change at any time, and data can be stored at non-contiguous locations in teh array JavaScript
 * arrays are not guaranteed to be dense.
 * 
 * Each item in the array is an element. For example if the array's length was 3, you can get each
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
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const someArray = ['item1', 'item2', 'item3'];
console.log(someArray); // This will log the following ['item1', 'item2', 'item3']

// We can now change the elements of this array, and we can also push more to the array using the .push() method (More about that below)
someArray[0] = 'Cat';
someArray[1] = 'Dog';
someArray[2] = 'Fox';
console.log(someArray); // This will log the following ['Cat', 'Dog', 'Fox']

/**
 * Although we can change the items in the array we cannot do the following.
 * Doing this will cause a TypeError (Assignment to a constant variable)
*/
someArray = ['item1', 'item2', 'item3'];

let randomArray = ['item1', 'item2', 'item3'];
console.log(randomArray); // This will log the following ['item1', 'item2', 'item3']

/**
 * As well as changing the elements of this array we can also redefine the array
 * We can do this by using the following:
 */
randomArray = ['different', 'array'];
console.log(randomArray); // This will log the following ['different', 'array']


/** Nested Arrays
 * A nested array is an array that contains another array.
 *  You can still get each element of the array as before using arrayName[]
 * To get each element inside the nested array you just add another []
 */

const array = [['item1'], ['item2', 'item3']];
console.log(array[0]); // This will log the following ['item1']
console.log(array[1][1]); // This will log the following 'item3'


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



/** Adding elements to the start of arrays
 * Above we have added elements to the end of the array, we can also add elements to the
 * start of an array. This is done using the .unshift() method.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 * 
 * In this example below we have an array called numbers.
 * The array contains 3 numbers but we want to add 1 and 2 to the start
 * of the array.
 */

const numbers = [3, 4, 5];

// We now want to add 1 and 2 to the start of the array using the .unshift() method.
numbers.unshift(1, 2);
console.log(numbers); // This will log the following [1, 2, 3, 4, 5]


/** Removing the last element from an array
 * You can remove the last element from an array using the .pop() method.
 * This method does not take any arguments. 
 * For this example we will use the animals array above, the array is currently:
 * ['dog', 'cat', 'fox', 'horse', 'snake']. We want to remove the snake element.
 */

const removed = animals.pop();
console.log(animals); // This will log the following ['dog', 'cat', 'fox', 'horse']
console.log(removed); // This will log the following 'snake'


/** List of some of the built in JavaScript array methods:
 * .join() - Creates and returns a new string by concatenating all of the elements in an array. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
 * .slice() - Returns a shallow copy of a portion of an array. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
 * .splice() - Changes the contents of an array by removing or replacing existing elements (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
 * .shift() - Removes the first element from an array and returns the removed element. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
 * .unshift() - Adds one or more elements to the start of an array. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
 * .contact() - Used to merge two or more arrays, this doesn't change the existing array but instead returns a new array. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
*/

