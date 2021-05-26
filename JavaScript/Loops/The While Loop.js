/**
 * We start a while loop with the 'while' keyword followed by our stopping condition. This
 * will be evaluated before each round of the loop. While the condition evaluates to
 * true, the block will continue to run. Once it evaluates to false, the loop will stop.
 * 
 * Documentation - https://developer.mozilla.org/en-US/docs/Glossary/loop#while_loop
 * 
 * In this example below we have a while loop that will print out 1, 2 and 3.
 */
let counter = 1;
while (counter < 4) {
    console.log(counter);
    counter++; // We need this to ensure we don't get an infinite loop.
}

/** Do while Statement
 * We may want a piece of code to run at least once and then loop
 * based on a specific condition after its initial run. This is where we can
 * use a 'do while' statement.
 * 
 * NOTE - Unlike the 'while' loop, the 'do while' statement will run at least
 * once whether or not the condition evalutes to true.
 * 
 * In this example below, we need 10 bottles of water.
 * We have created a 'do while' statement that says how many bottles we have added
 * to the order. We use a 'do while' loop because we want at least one bottle of water
 * even if the bottlesNeeded = 0.
 */
const bottlesNeeded = 10;
let bottlesAdded = 0;

do {
    bottlesAdded++;
} while(bottlesAdded > bottlesNeeded);