/**
 * In JavaScript there is three different keywords you can use to define variables.
 * These keywords are "let", "var" and "const". I personally use "const" for most.
 */

/** 
 * The first keyword we will look at is "const". This keyword is used to declare a
 * constant block-scoped variable. If you use "const" you cannot change the value
 * of it through reassignment.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * 
 * In the example below we will create a new constant called "hello".
 */

const hello = "Hello World!";
console.log(hello); // This will log - hello

hello = "Hello Exxon!"; // This will give us an error - "TypeError: Assignment to a constant variable."

/**
 * The second keyword we will look at is "let". This keyword is used to declare block-scoped
 * variables which can be reassigned later on.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * 
 * In the example below we will create a new variable called "myName". We can then reassign 
 * the value of this variable later on.
 */

let myName = "Exxon";
console.log(myName); // This will log - Exxon

myName = "Tom";
console.log(myName); // This will log - Tom

/**
 * The final keyword we can look at is "var". This keyword is used to declare globally-scopped
 * variables.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * 
 * In the example below we will create a new variable called "myAge". We can also reassign the
 * value of this variable later on, just like we did when using "let".
 */

var myAge = 19;
console.log(myAge); // This will log - 19

myAge = 18;
console.log(myAge); // This will log - 18

/**
 * The difference between "let" and "var".
 * 
 * The main difference is that "let" is a block-scoped variable and "var" is a globally-scoped"
 * variable. This means that "let" variables can only be used in the scope they are defined in.
 * "var" variables can be used globally, meaning they are not restricted to the scope they are
 * defined in. (I'm not the best at describing this)
 * 
 * In the example below we will define 4 variables. We will define "foo" and "bar" in the
 * global-scope and we will define "Foo" and "Bar" inside a block.
 */

var foo = "foo";
let bar = "bar";
console.log(foo, bar); // This will log - foo bar

{
    var Foo = "Foo";
    let Bar = "Bar";
    console.log(Foo, Bar); // This will log - Foo Bar
}

console.log(Foo); // This will log - Foo
console.log(Bar); // This will give us an error - "ReferenceError: Bar is not defined"