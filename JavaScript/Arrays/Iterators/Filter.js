/** 
 * Just like the .map() method, the .filter() method returns a new
 * array. This method filters out certain elements and returns a new
 * array. The callback function for the .filter() method should return
 * true or false depending on the element passed to it. If the element returns
 * true then it is added to the new array.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 * In this example below we want to filter out all the numbers from the array.
 * To do this we will be using the .filter() method and isNaN()
 */

const array = [4, 2, 'eight', 93, 'six', 276];

const newArray = array.filter(element => !isNaN(element));
console.log(newArray);

/** This will log the following:
 * [4, 2, 93, 276]
 */


//We can also use the .filter() method like this:
const newArray = array.filter(element => {
    return !isNaN(element);
});
