/**
 * When defining variables in TypeScript we can
 * give it a type. 
 * 
 * Documentation - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables
 * 
 * There are 3 commonlyused primitives:
 * string - Represents String Values
 * number - Numbers i.e 3
 * boolean - True or false
 * 
 * We can also give it the type of "any". This means
 * that you can use any type, i.e it could be a string, 
 * number or boolean. If you don't specify a type then
 * it will typically default to "any".
 * 
 * In the example below we will define three variables.
 */

const username: string = 'Exxon';
const age: number = 18;
const overEighteen: boolean = true;

/**
 * If we try to use a different type to what we defined
 * the variable with then it will give us an error. This
 * below will give this error:
 * 
 * Type 'boolean' is not assignable to type 'string'.
 * 
 * I have put @ts-ignore to remove the annoying red
 * mark when making notes.
 * 
 * However, if we use the type "any" then this error 
 * won't happen.
 */

//@ts-ignore
const error: string = true;
const noError: any = true;

/** Arrays
 * When defining an array we can give it a type. We use
 * the syntax "type[]" e.g. "number[]" would be an array
 * of numbers. We can also use the syntax "Array<type>"
 * e.g. "Array<number>", these both mean the same thing.
 */

const someArray: string[] = ['This', 'is', 'an', 'array', 'of', 'strings'];