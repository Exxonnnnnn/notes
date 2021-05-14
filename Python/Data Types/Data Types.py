"""
A data type is an important concept. Variables can store data of different
data types, and different data types can do different things.

In Python you have the following built-in data types:

Text Type - str
Numeric Types - int, float, complex
Sequence Types - list, tuple, range
Mapping Type - dict,
Set Types - set, frozenset
Boolean Type - bool
Binary Types - bytes, bytearray, memoryview

Documentation - https://www.w3schools.com/python/python_datatypes.asp


When you assign a value to a variable the data type is also set. In Python,
you can change the value and the datatype of the variable later on. You can
also set a specific type to a variable by using the following syntax:

variable_name = dataType(value)

If you wanted to get the type of a variable you can do so by using the following
syntax:

type(variable_name)

In the example below we will create two variables and then print the type of the variables
to the console.
"""

age = 18
name = str("Exxon")

print(type(age)) # This wil log - <class 'int'>
print(type(name)) # This will log - <class 'str'>