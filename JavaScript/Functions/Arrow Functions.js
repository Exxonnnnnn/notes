/**
 * ES6 Introduced the arrow function syntax. This is a shorter way to write functions by
 * using the "fat arrow" notation.
 * These functions remove the need to type out the keyword 'function'.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 * To create a function you include the parameters inside the () then add a => arrow that points to the
 * function body, surrounded by {}.
 */

// Zero Parameters arrow function
const someFunction = () => { };

// One Parameter arrow function
const someFunction = paramOne => { };

// Two or more Paramters arrow function
const someFunction = (paramOne, paramTwo) => { };

/**
 * We can also create single-line block functions.
 * These functions do not need the curly braces around it {}.
 * When doing one of these functions it automatically returns whatever is after the 'fat arrow' =>.
 * This function below will automatically return the value of param * param.
 */

const someFunction = param => param * param;

/**
 * If we wanted to return something in a normal arrow function we can do it
 * using the return key word
 * This function below will automatically return paramOne * paramTwo
 */

const someFunction = (paramOne, paramTwo) => {
    return paramOne * paramTwo;
};
