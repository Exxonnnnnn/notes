/**
 * The conditional operator (Also known as the "ternary operator") is the only JavaScript operator that takes three operands.
 * The operator can have one of two values based on the condition. The syntax is:
 * 
 * condition ? val1 : val2
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator
 * 
 * If the condition is true then it returns val1 otherwise it will return val2. 
 * 
 * Examples:
 */



/**
 * This will result in canDrink = 'Old enough to drink' if age is greater than or equal to 18, otherwise it result in canDrink = 'Too young to drink'
 */

const age = 19;

const canDrink = (age >= 18) ? 'Old enough to drink' : 'Too young to drink';

console.log(canDrink); // Expected output --> 'Old enough to drink'



