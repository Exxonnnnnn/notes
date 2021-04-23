###
CoffeeScript operators are a bit different to
JavaScript operators. I personally think they are
a bit more fun to use than the JavaScript ones.

Documentation - https://devdocs.io/coffeescript~2/index#operators

Below is a list of some of the differences:

CoffeeScript	    JavaScript
is	                ===
isnt	            !==
not	                !
and	                &&
or	                ||
true, yes, on	    true
false, no, off	    false
@, this	            this
a in b	            [].indexOf.call(b, a) >= 0
a of b	            a in b
for a from b	    for (a of b)
a ** b	            a ** b
a // b	            Math.floor(a / b)
a %% b	            (a % b + b) % b

Ignore below was just testing, will change when I actually add coffeescript
###

helloWorld = -> console.log "Hello World";

number1 = 10;
number2 = 12;
number3 = 10;

helloWorld() if number1 is number3;
helloWorld() if number1 isnt number2;

# This is how it would look in JavaScript:
`let helloWorld, number1, number2, number3;

helloWorld = function() {
    return console.log("Hello World");
}

if (number1 === number3) 
    helloWorld();

if (number1 !== number2)
    helloWorld();`