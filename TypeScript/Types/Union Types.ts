/**
 * We can also use Union Types. A union type is type 
 * formed from two or more other types, representing 
 * values that may be any one of those types.
 * 
 * Documentation - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 * 
 * In the example below we are going to create a function
 * that console logs a number. This can either be a 
 * string or a number. If we were to give a boolean value
 * then it would give this error:
 * 
 * Argument of type 'boolean' is not assignable to parameter of type 'string | number'
 */

function logNumber(number: number | string) {
    console.log(number);
}

logNumber(3);
logNumber("3");