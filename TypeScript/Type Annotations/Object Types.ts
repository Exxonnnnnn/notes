/**
 * As well as the primitives you may see an object
 * type. This refers to any JavaScript value with
 * properties. To define an object type we list its
 * properties and their types.
 * 
 * Documentation - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 * 
 * In the example below we are going to create a
 * function that console logs properties of a person.
 * We are also going to add a nickname property which we
 * will make optional by using "?".
 * 
 * If we forget to add a parameter it will give this error:
 * 
 * Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; nickname?: string; }'
 */

function logPerson(properties: { name: string; age: number; nickname?: string }) {
    console.log(
        `Name - ${properties.name}
        Age - ${properties.age}
        Nickname - ${properties.nickname || 'Unknown'}`
    );
}

logPerson({ name: 'a', age: 18, nickname: 'Exxon' });