/**
 * In JavaScript you can create a function which you can then call for it to do something.
 * Functions can have parameters passed through, for example if you had a function to play rock paper scissors, you would want to pass through
 * the two choices, your choice and the other persons choice.
 * 
 * In JavaScript you can also use functions before defining them, also known as Hoisting.
 * This is not recommended to do and is bad practice, but with the examples below we could put 'playRPS()' before defining the function and it would still work.
 */

// To start a function you use the 'function' keyword.
function playRPS() {

};

// To create a function with parameters you need to put them in the ()
function playRPS(choice1, choice2) {
    // You can then use these parameters inside the function, like this:
    console.log(choice1);
    console.log(choice2);
};

// We can then call this function
playRPS('rock', 'paper'); // This should then console log 'rock' and 'paper'

/**
 * We can also have the function return a value.
 * We can do this using the 'return' key word.
 * This function below will return the winner of rock paper scissors
 */

function playRPS(choice1, choice2) {
    if (
        (choice1 === 'paper' && choice2 === 'rock') ||
        (choice1 === 'rock' && choice2 === 'scissors') ||
        (choice1 === 'scissors' && choice2 === 'paper')
    )
        return 'Choice1 wins!';
    else
        return 'Choice 2 wins!';
};

/**
 * Now we can call this function.
 * This example below should console log 'Choice1 wins!'
 */

console.log(playRPS('rock', 'scissors'));