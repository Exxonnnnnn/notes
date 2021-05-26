/**
 * The typical for loop includes an iterator variable that usually appears in
 * all three expressions. The iterator variableis initialized, checked against the
 * stopping condition, and assigned a new value on each loop iteration.
 * 
 * A for loop contains three expressions seperated by ; inside the parentheses.
 * 1 - An initialization starts the loop and can also be used to declare the iterator variable.
 * 2 - A stopping condition is the condition that the iterator variable is evaluated against 
 * if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
 * 3 - An iteration statement is used to update the iterator variable on each loop.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Glossary/loop#for_loop
 * 
 * 
 * In the for loop below, it will output 0, 1, 2, 3 in the console all on seperate lines.
 * We can see that the initialization is 'let counter = 0'.
 * The stopping condition is 'counter < 4' (Counter is less than 4)
 * And the iteration statement is counter++ (Adds 1 to the counter each time)
 */

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}
/** Output:
 * 0
 * 1
 * 2
 * 3
 */

/** Looping through Arrays
 * We can also do a very similar method to loop through arrays.
 * In this example it will log every element in the array.
 * Here we will use the '.length' for the stopping condition
 */

const someArray = ['item1', 'item2', 'item3'];

for (let counter = 0; counter < someArray.length; counter++) {
    console.log(someArray[counter]);
}

/** Nested Loops
 * When we have a loop running inside another loop we call that a nested loop.
 * One use for this is to compare the elements in two arrays.
 * Here is an example below where we will loop through two arrays to see 
 * what numbers are in both arrays. (This is codecademy's way)
 */

const myArray = [2, 19, 20];
const yourArray = [19, 81, 2];

// How codecademy says to do it - Would output the following on seperate lines: Both loops have the number: 19, Both loops have the number: 2 
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
}

/** Other ways
 * There is two ways that first come to mind that could make this shorter and look cleaner.
 * Both ways we would be filtering the arrays.
 * One way we can continue to use a for loop and the other way we can use a forEach loop
 * Both of these ways will output the following:
 * Both loops have the number: 2
 * Both loops have the number: 19
 * 
 * 
 * Below we will filter the arrays
 */
const same = myArray.filter(n => yourArray.includes(n)); // Console logging same will now give: 2, 19

// Using a for loop
for (let i = 0; i < same.length; i++) {
    console.log(`Both loops have the number: ${same[i]}`);
}

// Using a forEach loop
same.forEach(s => {
    console.log(`Both loops have the number: ${s}`);
});

/** Another way we could do this:
 * This other way would output the phrase differently.
 * Rather than output on each line "Both loops have the number: Number" we can
 * put all of this on one line, and join each number with the .join() method.
 * 
 * We will be using the variable "same" which we defined above
 */

console.log(`Both loops have the numbers: ${same.join(', ')}`) // This will log the following: Both loops have the numbers: 2, 19

