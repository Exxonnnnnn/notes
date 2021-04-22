/**
 * Just like when defining variables, when creating 
 * a function we use Parameter Type Annotation. When 
 * calling the function if we try to pass through a
 * parameter of the wrong type it will give an error. We
 * also do Return Type Annotation. 
 * 
 * Documentation - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions
 *
 * In the example below we are going to create a function
 * that returns the sum of two numbers.
 */

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

sum(1, 2);

/**
 * If we try to pass through a string as num1 then
 * we will get this error:
 * 
 * Argument of type 'string' is not assignable to parameter of type 'number'
 * 
 * Again, I have used @ts-ignore because the having
 * the error is annoying.
 */

//@ts-ignore
sum('1', 2);

/**
 * If we create a new function that is supposed to
 * return a number but instead returns a string then
 * it will give another error:
 * 
 * Type 'string' is not assignable to type 'number'
 */

function add(num1: number, num2: number): number {
    //@ts-ignore
    return 'Oops an error';
}