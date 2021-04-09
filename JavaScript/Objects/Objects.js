/**
 * Objects can be assigned to variables just like any JavaScript
 * type. We use curly braces, {}, to designate an object literal
 * or using the Object() constructor.
 * E.g. const object = {};
 * 
 * The object class is used to store various keyed collections and
 * more complex entities.
 * 
 * We fill objects with unordered data. This data is organized into 
 * key-value pairs. A key is like a variable name that points to a
 * location in memory that holds a value. A key's value can be of any 
 * data type in the language including functions or other objects.
 * 
 * Example:
 * 
 * let person = {
 *      name: 'Exxon',
 *      age: 18
 * };
 * 
 * Documentation = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * 
 * In the example below we are going to create an object for a person,
 * we will use this later on.
 */

const person = {
    name: 'Exxon',
    eyeColour: 'Blue',
    age: 18,
    hobbies: ['Failing to code', 'Working']
};


/**
 * One way we can then access the properties of the objects is by using dot 
 * notation. With property dot notation, we write the object's name (person),
 * followed by the dot operator and then the property name (key).
 */

console.log(person.name); // This will log the following: "Exxon"
console.log(person.hobbies); // This will log the following: ["Failing to code", "Working"]

/** We can also get the first element of the array as we normally do: */
console.log(person.hobbies[0]); // This will log the following: "Failing to code"

/**
 * Another way we can access the properties of the objects is by using
 * bracket notation. To use bracket notation to access and object's
 * property, we pass in the property name (key) as a string, E.g. person['name']
 * We have to use bracket notation when accessing keys that have numbers, spaces
 * or special characters in them. Without bracket notation in these situations, 
 * our code would throw an error.
 */
console.log(person['eyeColour']); // This will log the following: "Blue"
console.log(person['hobbies'][1]); // This will log the following: "Working"


/**
 * Objects are mutable meaning we can update them after we create them.
 * We can either use dot notation or bracket notation and the assignment
 * operator to add new key-value pairs to an object or change an existing
 * property.
 * 
 * If we use the 'const' keyword to declare the object we cannot reassign
 * the object, however we can still add new properties and change
 * the current properties.
 * 
 * In the example below we are going to use the object we created above.
 * We are going to change the 'name' property to 'Tom'. Then we are going
 * to add the hair colour property to the object.
 */

person.name = 'Tom';
console.log(person.name); // This will log the following: "Tom"

person.hairColour = 'Brown';
console.log(person.hairColour); // This will log the following: "Brown"

/** 
 * We can also delete object properties. As you may have seen
 * in './JavaScript/Operators/Delete Operator.js' we have covered the 
 * delete operator. This operator allows us to delete properties of
 * an object.
 * 
 * In the example below we are going to delete the age property.
 */

delete person.age;
console.log(person);
/** This will log the following:
 * {
 *    name: "Exxon",
 *    eyeColour: "Blue",
 *    hobbies: ["Failing to code", "Working"],
 *    hairColour: "Brown",
 * }
 */