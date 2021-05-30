"""
In Python, there are three different numeric types. These are "int",
"float" and "complex".

Documentation - https://www.w3schools.com/python/python_numbers.asp

Below we will look at all three different types.
"""

"""
"int", or integer, is a whole number, positive or negative, without decimals
and has an unlimited length.

Below are a few examples of integers
"""

int_1 = 1
int_2 = 3248092309348023743
int_3 = -1232

print(type(int_1), type(int_2), type(int_3)) # This will log - <class 'int'> <class 'int'> <class 'int'>


"""
"float", or "floating point number" is a number, positive or negative, that
contains one or more decimals. A "float" can also be scientific numbers with an
"e" to indicate the power of 10

Below are a few examples of this.
"""

float_1 = 1.12342340
float_2 = 1.0
float_3 = -35.59
float_4 = 35e3 # 35000.0
float_5 = 12E4 # 120000.0
float_6 = -87.7e100 # -8.77e+101

# This will log - <class 'float'> <class 'float'> <class 'float'> <class 'float'> <class 'float'> <class 'float'>
print(type(float_1), type(float_2), type(float_3), type(float_4), type(float_5), type(float_6)) 


"""
"complex" numbers are written with a "j" as the imaginary part.
"""