/** Break Keyword
 * The break keyword can be used to stop the loop at any time.
 * Usually this would be put in an if statement.
 * 
 * For example:
 * Say we wanted to loop through an array until a certain word.
 * Here we have an array of animals, when it gets to the animal 'dog' we want
 * to stop the loop.
 */

const animals = ['cat', 'horse', 'fox', 'rabbit', 'dog', 'guinea pig', 'fish', 'bird'];

// We now want to loop through this array until the animal 'dog'
for (let i = 0; i < animals.length; i++) {
    console.log(`I want a ${animals[i]}`); // This will log each animal
    if (animals[i] === 'dog')
        break; // Here we use the break keyword.
}
/** This will log the following:
 * I want a cat
 * I want a horse
 * I want a fox
 * I want a rabbit
 * I want a dog
 */