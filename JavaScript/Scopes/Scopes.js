/**
 * In JavaScript there is a thing called Global Scopes and Local Scopes
 * A global scope is one you can use anywhere in your code, whereas a local scope
 * is one you can only use in a certain section.
 * 
 * For example, if we define a variable at the top of a file we can use that variable throughout the file
 * even if we are inside a code block, this is a global scope.
 * 
 * If we define a variable inside a code block we can only use that variable inside the code block
 */

/**
 * Here we have an example of a global scope.
 * When we call the logAnimal function below, it should console log 'Dog'.
 * We can also do a normal console.log(animal) as it is a global scope.
 * Both of these will console log 'Dog'
 */

const animal = 'Dog';

function logAnimal() {
    console.log(animal);
};

logAnimal();
console.log(animal);

/**
 * We can also do this to redefine variables.
 * Here we use the let keyword to define colour. We can use this in and outside of the code block.
 * We can also redfine the colour inside of the code block
 */

let colour = 'Red';

function logColour() {
    colour = 'Blue';
    console.log(colour);
};

logColour(); // Logs - 'Blue'
console.log(colour); // Logs - 'Blue'


/**
 * Here we have an example of a local scope. 
 * When we call the logName function below it should console log 'Dog'.
 * We cannot use the name variable outside of this code block.
 */

function logName() {
    const name = 'Exxon';
    console.log(name);
};

logName();

/** 
 * If we try to use this name variable again, we will get a ReferenceError saying that animal is not defined. 
 */

console.log(name);