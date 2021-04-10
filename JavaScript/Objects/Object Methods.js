/**
 * Inside of an object we can also create methods (functions).
 * As you have already seen with "console.log()". Console is a 
 * global JavaScript object and .log() is a method on that object.
 * We can create methods inside of an object in two ways, the 
 * second way we will show you is my preferred way.
 * 
 * In the example below we have an object called person. Inside
 * that object we want to create a method called "quote" which
 * should console log a quote. The first example below will be
 * using the colon and the "function" keyword. In the second
 * example we will remove this and just use "quote()"
 */
const person = {
    name: "Exxon",
    eyeColour: "Blue",
    age: 18,
    hobbies: ["Failing to code", "Working"],
    hairColour: "Brown",
    quote: function () {
        console.log("Hello World!");
    }
};

/** 
 * The other way we can do it is by removing the colon and the
 * "function" keyword.
 */
const person = {
    name: "Exxon",
    eyeColour: "Blue",
    age: 18,
    hobbies: ["Failing to code", "Working"],
    hairColour: "Brown",
    quote() {
        console.log("Hello World!");
    }
};

/**
 * We can then call this method as shown below
 */

person.quote(); // This will log the following: "Hello World!"

/**
 * We can also pass through parameters. So for example if we wanted 
 * it to say "Hello {name}" we can add a "name" parameter to the
 * method.
 */

const person = {
    ...Properties,
    quote(name) {
        console.log(`Hello ${name}!`);
    }
};

/** We can then call this method and pass through a name */
person.quote("Exxon"); // This will log the following: "Hello Exxon!"