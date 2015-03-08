# Global






## Functions

### rgb(red, green, blue) 

Returns the 24-bit color value corresponding to the red, green, blue
components.

##### Parameters:

* **red** `number`
  * red component

* **green** `number`
  * green component

* **blue** `number`
  * blue component

##### Returns: 
* `number`
  * 24-bit color value


* * *

### rgba(red, green, blue, alpha) 

Returns the 32-bit color value corresponding to the red, green, blue and
alpha values.

##### Parameters:

* **red** `number`
  * red component

* **green** `number`
  * green component

* **blue** `number`
  * blue component

* **alpha** `number`
  * alpha component

##### Returns: 
* `number`
  * 32-bit color value


* * *

### red(color) 

Returns the red component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * red component


* * *

### green(color) 

Returns the green component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * green component


* * *

### blue(color) 

Returns the blue component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * blue component


* * *

### alpha(color) 

Returns the alpha component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * alpha component


* * *

### aCosH(a) 

Returns the area hyperbolic cosine of the specified value.

##### Parameters:

* **a** `number`
  * value

##### Returns: 
* `number`
  * area hyperbolic cosine


* * *

### aSinH(a) 

Returns the area hyperbolic sine of the specified value.

##### Parameters:

* **a** `number`
  * value

##### Returns: 
* `number`
  * area hyperbolic sine


* * *

### aTanH(a) 

Returns the area hyperbolic tangent of the specified value.

##### Parameters:

* **a** `number`
  * value

##### Returns: 
* `number`
  * area hyperbolic tangent


* * *

### cosH(angle) 

Returns the hyperbolic cosine of the specified hyperbolic angle.

##### Parameters:

* **angle** `number`
  * angle

##### Returns: 
* `number`
  * hyperbolic cosine


* * *

### degree(angle) 

Converts the given angle from radian to degree.

##### Parameters:

* **angle** `number`
  * radian angle

##### Returns: 
* `number`
  * degree angle


* * *

### radian(angle) 

Converts the given angle from degrees into radian.

##### Parameters:

* **angle** `number`
  * degree angle

##### Returns: 
* `number`
  * radian angle


* * *

### log10(a) 

Returns the log in base 10 of the given number.

##### Parameters:

* **a** `number`
  * number

##### Returns: 
* `number`
  * log in base 10


* * *

### isInfinity(a) 

Returns true if the given value represents positive or negative infinity.

##### Parameters:

* **a** `number`
  * value

##### Returns: 
* `boolean`
  * true or false


* * *

### round(number, mode) 

Round the specified float number according to the given mode.

##### Parameters:

* **number** `number`
  * Round the specified float number according to the given mode.

* **mode** `number`
  * mode (Down = 0 / Up = 1 / Nearest = 2)

##### Returns: 
* `number`
  * rounded value


* * *

### sign(a) 

Returns a floating-point value representing the sign of the given number.

##### Parameters:

* **a** `number`
  * value

##### Returns: 
* `number`
  * -1 or 0 or 1


* * *

### sinH(angle) 

Returns the hyperbolic sine of the specified hyperbolic angle.

##### Parameters:

* **angle** `number`
  * hyperbolic angle

##### Returns: 
* `number`
  * hyperbolic sine


* * *

### tanH(angle) 

Returns the hyperbolic tangent of the specified hyperbolic angle.

##### Parameters:

* **angle** `number`
  * hyperbolic angle

##### Returns: 
* `number`
  * hyperbolic tangent


* * *

### int(a) 

Returns the integer part of a float number.

##### Parameters:

* **a** `number`
  * float number

##### Returns: 
* `number`
  * integer value


* * *

### random(maximum, minimum) 

Returns a random number from zero to the given maximum value (both values included).

##### Parameters:

* **maximum** `number`
  * maximum value

* **minimum** `number`
  * optional minimum value

##### Returns: 
* `number`
  * number


* * *

### xor(a, b) 

Logical XOR. Can be used to combine the logical true ot false results of
the comparison operators to give a result shown in the following table.
This operator cannot be used with strings.

##### Parameters:

* **a** `number`
  * first value

* **b** `number`
  * second value

##### Returns: 
* `* | boolean`
  * logical XOR


* * *

### normalizeArg(arg) 

It's used to take a string of comma separated names and turn it into an
`Array` of names. If an array of names is passed in, it's left as is.

##### Parameters:

* **arg** `String | Array`
  * either a comma separated string or an array

##### Returns: 
* `Array`
  * array of normalized names

**Example**:
```js
_.normalizeArg("Birds, Insects, Flowers");
// returns ["Birds", "Insects", "Flowers"]
```


* * *

### popProperty(obj, property) 

Removes a property from an object and returns it if it exists

##### Parameters:

* **obj** `Object`
  * object

* **property** `String`
  * property to pop off the object

##### Returns: 
* `*`
  * popped property


* * *

### removeExtension(filename) 

Helper method to return a name without an extension

##### Parameters:

* **filename** `String`
  * Helper method to return a name without an extension

##### Returns: 
* `String`
  * filename without an extension


* * *

### fileExtension(filename) 

Return the file extension of a filename

##### Parameters:

* **filename** `String`
  * Return the file extension of a filename

##### Returns: 
* `String`
  * lowercased extension


* * *

### lastElements(num) 

Returns the last element(s) in the array.
When [num] is passed, returns the last [num] elements in the array.

##### Parameters:

* **num** `number`
  * number

##### Returns: 
* `*`
  * last element(s) in the array

**Example**:
```js
[1,2,3].last()        -> 3
  [1,2,3].last(2)       -> [2,3]
```


* * *












