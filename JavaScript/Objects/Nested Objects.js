/**
 * When doing Arrays we have seen that we can do nested arrays.
 * We can also do nested objects, these are done in a similar way
 * to nested ararys.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
 * 
 * In the example below we have an object called person and then
 * inside that object we have another object which is their looks.
 * We will be continuing on the previous object from "./Object Methods.js".
 */
const person = {
    name: "Exxon",
    age: 18,
    hobbies: ["Failing to code", "Working"],
    looks: {
        eyeColour: "Blue",
        hairColour: "Brown",
        height: "5ft 8",
    },
    quote: function () {
        console.log("Hello World!");
    }
};

/**
 * As you can see inside the object above we now have a 
 * nested object. We can get each property of the nested object
 * by using dot notation or bracket notation as shown before
 * in "./Objects.js". We will show dot notation first and then
 * bracket notation.
 */
console.log(person.looks.eyeColour); // This will log the following: "Blue"
console.log(person['looks']['eyeColour']); // This will log the following: "Blue"