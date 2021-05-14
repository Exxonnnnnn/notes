""" 
When creating new variables in Python you do not need to use a command/keyword.
A variable is created the moment you first assign a value to it. You can
also change the type and the value of a variable after it has been set.

When creating a new variable there is certain names that you cannot have. You
cannot have a space or (-) in the variable name. The name also cannot start with
a number, it must start with a letter or an underscore (_). Variable names are
case-sensitive meaning that you can have a variable called "name" and another called
"Name".

Documentation - https://www.w3schools.com/python/python_variables.asp

In the example below we are going to create two variables, "myName" and "myAge".
We will then re-assign the value of these variables.
"""

myName = "Exxon"
myAge = 18

print(myName) # This will log - Exxon
print(myAge) # This will log - 18

myName = "Tom"
myAge = "19" 

print(myName) # This will log - Tom
print(myAge) # This will log - 19

# Notice how you do not get any errors by reassigning the value or the type of the variable.


"""
We can also asign values to multiple variables in one line. This can be done by listing the
variable names seperated by a comma (,) and then an equals sign and the values seperated by
a comma (,).

Documentation - https://www.w3schools.com/python/python_variables_multiple.asp

In the example below we will create three new variables, "hello", "foo" and "bar".
"""

hello, foo, bar = "Hello World!", "foo", "bar"

print(hello) # This will log - Hello World!
print(foo) # This will log - foo
print(bar) # This will log - bar


"""
We can also assin the same value to multiple variables in one line. This is done by listing 
each variable name seperated by " = " followed by an equals sign and then the value of the 
variables.

In the example below we will create two new variables, "exxon" and "Exxon".
"""

exxon = Exxon = "My name is Exxon!"

print(exxon) # This will log - My name is Exxon!
print(Exxon) # This will log - My name is Exxon!


"""
The final thing we will look at is unpacking a collection. If we have a collection of values in
a list we can extract the values into variables. This is called "unpacking".

In the example below we will have an array of fruits that we will unpack to three variables, "x",
"y", and "z".
"""

fruits = ["apple", "banana", "cherry"]
x, y, z = fruits

print(x) # This will log - apple
print(y) # This will log - banana
print(z) # This will log - cheery