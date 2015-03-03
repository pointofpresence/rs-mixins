# rs-mixins
Our custom functions for the Underscore object.


# API

* * *

### rgb(red, green, blue) 

Returns the 24-bit color value corresponding to the red, green, blue
components.

**Parameters**

**red**: , Returns the 24-bit color value corresponding to the red, green, blue
components.

**green**: , Returns the 24-bit color value corresponding to the red, green, blue
components.

**blue**: , Returns the 24-bit color value corresponding to the red, green, blue
components.

**Returns**: `number`


### rgba(red, green, blue, alpha) 

Returns the 32-bit color value corresponding to the red, green, blue and
alpha values.

**Parameters**

**red**: , Returns the 32-bit color value corresponding to the red, green, blue and
alpha values.

**green**: , Returns the 32-bit color value corresponding to the red, green, blue and
alpha values.

**blue**: , Returns the 32-bit color value corresponding to the red, green, blue and
alpha values.

**alpha**: , Returns the 32-bit color value corresponding to the red, green, blue and
alpha values.

**Returns**: `number`


### red(color) 

Returns the red component of a color value.

**Parameters**

**color**: , Returns the red component of a color value.

**Returns**: `number`


### green(color) 

Returns the green component of a color value.

**Parameters**

**color**: , Returns the green component of a color value.

**Returns**: `number`


### blue(color) 

Returns the blue component of a color value.

**Parameters**

**color**: , Returns the blue component of a color value.

**Returns**: `number`


### alpha(color) 

Returns the alpha component of a color value.

**Parameters**

**color**: , Returns the alpha component of a color value.

**Returns**: `number`


### normalizeArg(arg) 

It's used to take a string of comma separated names and turn it into an
`Array` of names. If an array of names is passed in, it's left as is.
Example usage:

_.normalizeArg("Birds, Insects, Flowers");
// returns ["Birds", "Insects", "Flowers"]

**Parameters**

**arg**: `String | Array`, Either a comma separated string or an array

**Returns**: `Array`, array of normalized names


### popProperty(obj, property) 

Removes a property from an object and returns it if it exists

**Parameters**

**obj**: `Object`, Removes a property from an object and returns it if it exists

**property**: `String`, property to pop off the object

**Returns**: `*`, popped property


### removeExtension(filename) 

Helper method to return a name without an extension

**Parameters**

**filename**: `String`, Helper method to return a name without an extension

**Returns**: `String`, filename without an extension


### fileExtension(filename) 

Return the file extension of a filename

**Parameters**

**filename**: `String`, Return the file extension of a filename

**Returns**: `String`, lowercased extension



* * *


# Requirements
* [Underscore JS](http://underscorejs.org/)


# Changelog
### v0.1 

* Initial Release