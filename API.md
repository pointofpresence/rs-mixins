# Global





* * *

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


### red(color) 

Returns the red component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * red component


### green(color) 

Returns the green component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * green component


### blue(color) 

Returns the blue component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * blue component


### alpha(color) 

Returns the alpha component of a color value.

##### Parameters:

* **color** `number`
  * color

##### Returns: 
* `number`
  * alpha component


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


### removeExtension(filename) 

Helper method to return a name without an extension

##### Parameters:

* **filename** `String`
  * Helper method to return a name without an extension

##### Returns: 
* `String`
  * filename without an extension


### fileExtension(filename) 

Return the file extension of a filename

##### Parameters:

* **filename** `String`
  * Return the file extension of a filename

##### Returns: 
* `String`
  * lowercased extension



* * *










