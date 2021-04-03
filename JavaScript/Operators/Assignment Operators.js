/**
 * An assignment operator assigns a value to it's left operand based on the value of it's right operand.
 * The simple assignment operator is equal (=) which assings the value of it's right operand to it's left operand. E.g `x = y` assings the value of `y` to `x`.
 */

let x = 3;
let y = 5;

// Assignment Operators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)
x = y // Means the value of x is equal to y (Assignment)
x += y // Means the value of x is x + y (Addittion assignment)
x -= y // Means the value of x is x - y (Subtraction assignment)
x *= y // Means the value of x is x times by y (Multiplication assignment)
x /= y // Means the value of x is x divided by y (Division assignment)
x %= y // Means the value of x is the remainder of x divided by y. E.g. x = 3 and y = 2. X would then equal 1 (Remainder assignment)
x **= y // Means the value of x is x to the power of y. E.g. x = 3 and y = 3, x to the power of y is 27. (Exponentiation assignment)

// Left and Right Shift Assignment Operators
x <<= y // This is the Left shift assignment operator. It moves the specified amount of bits to the left and assigns the result to the variable. E.g. x = 5, x <<= 2 would result in x equals 20
x >>= y // This is the Right shift assignment operator. It moves the specified amount of bits to the right and assigns the result to the variable. E.g. x = 5, x >>= 2 would result in x equals 1
x >>>= y // This is the Unsigned right shift assignment operator. It moves the specified amount of bits to the right and assigns the result to the variable e.g. x = -5, x >>>= 2 would result in x equals 1073741822

// Bitwise Assignment Operators
x &= y // This is the Bitwise AND assignment operator. It uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable. E.g. x = 5, x &= 3 would result in x equals 1
x ^= y // This is the Bitwise XOR assignment operator. It uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable. E.g. x = 5, x ^=3 would result in x equals 6
x != y // This is the Bitwise OR assignment operator. It uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable. E.g. x = 5, x !=3 would result in x equals 7

// Logical Assignment Operators
x &&= y // Means the value of x is equal to y ONLY if x is truthy. E.g. x = 1, x &&= 2 would result in x equals 2. If x = 0 then x &&= 2 would result in x equals 0.
x ||= y // Means the  value of x is equal to y ONLY if x is falsy. E.g. x = { duration: 50, title: '' }, x.duration ||= 10 would result in x.duration equals 50. However, x.title ||= 'Some title' would result in x.title = 'Some title'.
x ??= y // Means the value of x is equal to y ONLY if x is nullish (Null or Undefined). E.g. x = { duration: 50 }, x.duration ??= 10 would result in x.duration equals 50. However, x.title ??= 'Some title' would result in x.title = 'Some title'.



