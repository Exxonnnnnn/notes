"""
Other Operators

Documentation - https://www.w3schools.com/python/python_operators.asp
"""

x = 3
y = 5

# Identity Operators
x is y # Returns true if x and y are both the same object
x is not y # Returns true if both variables are not the same object

# Membership Operators
x in y # Returns true if a sequence with the specified value is present in the object
x not in y # Returns true if a sequence with the specified value is not present in the object

# Bitwise Operators
x & y # (AND) - Sets each bit to 1 if both bits are 1
x | y # (OR) - Sets each bit to 1 if one of two bits is 1
x ^ y # (XOR) - Sets each bit to 1 if only one of the two bits is 1
# x ~ y (NOT) - Inverts all the bits
x << y # (Zero fill left shift) - Shift left by pushing zeros in from the right and let the leftmost bits fall off
x >> y # (Signed right shift) - Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

