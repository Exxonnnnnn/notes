/**
 * The JavaScript 'delete' operator removes a property from
 * an object. If no more references to the same property are held,
 * it is eventually released automatically.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 * 
 * In the example below, we have a variable called person which
 * is an object. The object includes the name and age, we want to 
 * delete the age property using the 'delete' operator.
 */

const person = {
    name: 'Exxon',
    age: 18
};

console.log(person);
/** This will log the following:
 * {
 *   age: 18,
 *   name: "Exxon"
 * }
 */

delete person.name;
console.log(person);
/** This will log the following:
 * {
 *   age: 18,
 * }
 */
