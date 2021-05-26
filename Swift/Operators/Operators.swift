/*
Operators

Docs:
https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html
https://docs.swift.org/swift-book/LanguageGuide/AdvancedOperators.html
*/


/* Assignment Operator

The assignment operator initializes or updates the value of something.
Basic Syntax:
var name = "Exxon";

If the right side of the assignment is a tuple with multiple values, it's
elements can be decomposed into multiple constants or variables.
Syntax:
var (name, age) = ("Exxon", 18);

In the example below we wil use both ways of doing it.
*/
let name = "Exxon"
let age = 18

let (birthMonth, birthDay) = (3, 5)


/* Arithmetic Operators

Swift supports the four standard arithmetic operators for all number types. This
is Addition (+), Subtraction (-), Multiplication (*), Division (/) and
remainder (%).

In the example below we will use all of the arithmetic operators.
*/
let num1 = 1 + 2; // Equals 3
let num2 = 18 - 9; // Equals 9 
let num3 = 3 * 3; // Equals 9
let num4 = 10.0 / 2.5; // Equals 4.0
let num5 = 9 % 4; // Equals 1 (You can fit two 4s into 9 with one left over)
