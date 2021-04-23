/**
 * Type Aliases and Interfaces are very similar. Almost all
 * features of an "interface" are available in "type". The key
 * distinction is that a type cannot be re-opened to add new
 * properties whereas an interface is always extendable.
 * 
 * 
 * Type Aliases:
 * If we want to use the same type more than once and refer to
 * it by a single name we can create a Type Alias. A type alias
 * is a name for any type. The syntax for it is this:
 * 
 * type account = {
 *  username: string;
 *  age: number;
 * };
 * 
 * We can also give it any type, not just an object type. For example:
 * 
 * type age = number | string;
 * 
 * Documentation - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 * 
 * In the example below we are going to create a function that
 * logs information on an account. We will create a type alias for
 * this. 
 */

type account = {
    username: string;
    age: number;
};

function logAccount(account: account) {
    console.log(
        `The account's name is ${account.username}
        Their age is ${account.age}`
    );
}

logAccount({ username: 'Exxon', age: 18 });

/**
 * We can extend a type but we have to do it using intersections.
 * The syntax for this using the type "account" we made above would
 * be:
 * 
 * type hobbies = account & {
 *  hobbies: string[];
 * };
 * 
 * In the example below we are going to make a function using this type.
 * Since we are extending the "account" type we have to include "age"
 * when calling the function.
 */

type hobbies = account & {
    hobbies: string[];
};

function logUsernameAndHobbies(account: hobbies) {
    console.log(
        `Username - ${account.username}
        Hobbies - ${account.hobbies.join(' ')}`
    );
}

logUsernameAndHobbies({ username: 'Exxon', age: 18, hobbies: ['coding'] });

/**
 * Interfaces:
 * An interface declaration is another way to name an object type.
 * The syntax for this is:
 * 
 * interface Account {
 *  username: string;
 *  age: number;
 * };
 * 
 * Documentation - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * 
 * In the example below we are going to create a similar function as 
 * above however we will use an interface.
 * 
 */

interface user {
    username: string;
    age: number;
};

function logUser(user: user) {
    console.log(
        `Username - ${user.username}
        Age - ${user.age}`
    );
}

/**
 * Extending an interface:
 * To extend an interface you do it like how you would for a class.
 * You would do something like:
 * 
 * interface userHobbies extends user {
 *  hobbies: string[];
 * };
 * 
 * In the example below we are going to extend the user interface to
 * add userHobbies.
 */
interface userHobbies extends user {
    hobbies: string[];
};

function logUserAndHobbies(user: userHobbies) {
    console.log(
        `Username - ${user.username}
        Age - ${user.age}
        Hobbies - ${user.hobbies.join(', ')}`
    );
}

//@ts-ignore 
logUserAndHobbies({ username: 'Exxon', age: 18, hobbies: ['coding'] });

/** Adding new fields to an extisting interface:
 * With the example above where we extended the "user" interface, it
 * would've made more sense for us to just add another field to the
 * interface.
 * 
 * If we tried to do this with a type we would get the error:
 * 
 * Duplicate identifier 'typeName'
 * 
 * In the example below we will add the eyeColor field to the user interface.
 * I've had to add @ts-ignore to the "logUserAndHobbies" function since it now
 * wants us to add "eyeColor" to it.
 */

interface user {
    eyeColor: string;
};

function logUserAndEyeColor(user: user) {
    console.log(
        `Username - ${user.username}
        Age - ${user.age}
        Eye Color - ${user.eyeColor}`
    );
}

logUserAndEyeColor({ username: 'Exxon', age: 18, eyeColor: 'Blue' });