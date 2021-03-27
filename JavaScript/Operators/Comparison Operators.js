/**
 * A comparison operator compares it's operands and returns a logical value on whether the comparison is true.
 * The operands can be numerical, string, logical or object values.
 * Strings are compared based on standard lexicographical odering using Unicode values. 
 */

// Comparison Operators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

const som1 = 3;
const som2 = 4;

/**
 * Equal Comparison Operator (==)
 * This operator returns `true` if the operands are equal
 * Examples:
 */
console.log(3 == som1) // Logs "true"
console.log("3" == som1) // Logs "true"
console.log(som1 == 5) // Logs "false"

/**
 * Not Equal Comparison Operator (!=)
 * This operator returns `true` if the operands are not equal
 * Examples:
 */
console.log(som1 != 4) // Logs "true"
console.log(som2 != "3") // Logs "true"
console.log(som1 != "3") // Logs "false"

/**
 * Strict Equal Comparison Operator (===)
 * This operator returns `true` if the operands are equal AND of the same type
 * Examples:
 */
console.log(som1 === 3) // Logs "true"
console.log(som1 === "3") // Logs "false"

/**
 * Strict Not Equal Comparison Operator (!==)
 * This operator returns `true` if the operands are of the same type but NOT equal, or are of a different type
 * Examples:
 */
console.log(som1 !== "3") // Logs "true"
console.log(som1 !== 3) // Logs "false"

/**
 * Greater Than Comparison Operator (>)
 * This operator returns `true` if the left operand is greater than the right operand
 * Examples:
 */
console.log(som2 > som1) // Logs "true"
console.log("12" > som1) // Logs "true"
console.log(som1 > "12") // Logs "false"

/**
 * Greater Than or Equal Comparison Operator (>=)
 * This operator returns `true` if the left operand is greater than or equal to the right operand
 * Examples:
 */
console.log(som2 >= som1) // Logs "true"
console.log(3 >= som1) // Logs "true"
console.log(1 >= som1) // Logs "false"

/**
 * Less Than Comparison Operator (<)
 * This operator returns `true` if the left operand is less than the right operand
 * Examples:
 */
console.log(som1 < som2) // Logs "true"
console.log(som1 < "12") // Logs "true"
console.log("12" < som1) // Logs "false"

/**
 * Less Than or Equal Comparison Operator (<=)
 * This operator returns `true` if the left operand is less than or equal to the right operand
 * Examples:
 */
console.log(som1 <= som2) // Logs "true"
console.log(3 <= som1) // Logs "true"
console.log(12 <= som1) // Logs "false"
