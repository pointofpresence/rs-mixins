/**
 * @name  rs-mixins
 * @version 0.2
 * @author point.of.presence and others
 * @see http://pointofpresence.ru
 * @see https://github.com/pointofpresence/rs-mixins
 */

_.mixin({
    /**
     * Returns the 24-bit color value corresponding to the red, green, blue
     * components.
     *
     * @param {number} red red component
     * @param {number} green green component
     * @param {number} blue blue component
     * @returns {number} 24-bit color value
     */
    rgb: function (red, green, blue) {
        return blue << 16 | green << 8 | red;
    },

    /**
     * Returns the 32-bit color value corresponding to the red, green, blue and
     * alpha values.
     *
     * @param {number} red red component
     * @param {number} green green component
     * @param {number} blue blue component
     * @param {number} alpha alpha component
     * @returns {number} 32-bit color value
     */
    rgba: function (red, green, blue, alpha) {
        return alpha << 24 | blue << 16 | green << 8 | red
    },

    /**
     * Returns the red component of a color value.
     *
     * @param {number} color color
     * @returns {number} red component
     */
    red: function (color) {
        return color & 255;
    },

    /**
     * Returns the green component of a color value.
     *
     * @param {number} color color
     * @returns {number} green component
     */
    green: function (color) {
        return color >> 8 & 255;
    },

    /**
     * Returns the blue component of a color value.
     *
     * @param {number} color color
     * @returns {number} blue component
     */
    blue: function (color) {
        return color >> 16 & 255;
    },

    /**
     * Returns the alpha component of a color value.
     *
     * @param {number} color color
     * @returns {number} alpha component
     */
    alpha: function (color) {
        return color >> 24 & 255;
    },

    /**
     * Returns the area hyperbolic cosine of the specified value.
     *
     * @param {number} a value
     * @returns {number} area hyperbolic cosine
     */
    aCosH: function (a) {
        return Math.log(a + Math.sqrt(a * a - 1));
    },

    /**
     * Returns the area hyperbolic sine of the specified value.
     *
     * @param {number} a value
     * @returns {number} area hyperbolic sine
     */
    aSinH: function (a) {
        return Math.log(a + Math.sqrt(a * a + 1));
    },

    /**
     * Returns the area hyperbolic tangent of the specified value.
     *
     * @param {number} a value
     * @returns {number} area hyperbolic tangent
     */
    aTanH: function (a) {
        return 0.5 * Math.log((1 + a) / (1 - a));
    },

    /**
     * Returns the hyperbolic cosine of the specified hyperbolic angle.
     *
     * @param {number} angle angle
     * @returns {number} hyperbolic cosine
     */
    cosH: function (angle) {
        return (Math.exp(angle) + Math.exp(-angle)) / 2;
    },

    /**
     * Converts the given angle from radian to degree.
     *
     * @param {number} angle radian angle
     * @returns {number} degree angle
     */
    degree: function (angle) {
        return 180 / Math.PI * angle;
    },

    /**
     * Converts the given angle from degrees into radian.
     *
     * @param {number} angle degree angle
     * @returns {number} radian angle
     */
    radian: function (angle) {
        return Math.PI / 180 * angle;
    },

    /**
     * Returns the log in base 10 of the given number.
     *
     * @param {number} a number
     * @returns {number} log in base 10
     */
    log10: function (a) {
        return Math.log(a) / 2.302585092994046;
    },

    /**
     * Returns true if the given value represents positive or negative infinity.
     *
     * @param {number} a value
     * @returns {boolean} true or false
     */
    isInfinity: function (a) {
        return a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY;
    },

    /**
     * Round the specified float number according to the given mode.
     *
     * @param {number} number
     * @param {number} mode mode (Down = 0 / Up = 1 / Nearest = 2)
     * @returns {number} rounded value
     */
    round: function (number, mode) {
        switch (mode) {
            case 1:
                return Math.ceil(number);
            case 2:
                return 0 < number ? Math.floor(number + 0.5) : Math.ceil(number - 0.5);
            default:
                return Math.floor(number);
        }
    },

    /**
     * Returns a floating-point value representing the sign of the given number.
     *
     * @param {number} a value
     * @returns {number} -1 or 0 or 1
     */
    sign: function (a) {
        return a ? 0 > a ? -1 : 1 : 0;
    },

    /**
     * Returns the hyperbolic sine of the specified hyperbolic angle.
     *
     * @param {number} angle hyperbolic angle
     * @returns {number} hyperbolic sine
     */
    sinH: function (angle) {
        return (Math.exp(angle) - Math.exp(-angle)) / 2;
    },

    /**
     * Returns the hyperbolic tangent of the specified hyperbolic angle.
     *
     * @param {number} angle hyperbolic angle
     * @returns {number} hyperbolic tangent
     */
    tanH: function (angle) {
        return (Math.exp(angle) - Math.exp(-angle)) / (Math.exp(angle) + Math.exp(-angle))
    },

    /**
     * Returns the integer part of a float number.
     *
     * @param {number} a float number
     * @returns {number} integer value
     */
    int: function (a) {
        return a | 0;
    },

    /**
     * Returns a random number from zero to the given maximum value (both values included).
     *
     * @param {number} maximum maximum value
     * @param {number} minimum optional minimum value
     * @returns {number} number
     */
    random: function (maximum, minimum) {
        "undefined" === typeof minimum && (minimum = 0);
        return minimum + (Math.random() * (maximum - minimum + 1) | 0);
    },

    /**
     * Logical XOR. Can be used to combine the logical true ot false results of
     * the comparison operators to give a result shown in the following table.
     * This operator cannot be used with strings.
     *
     * @param {number} a first value
     * @param {number} b second value
     * @returns {*|boolean} logical XOR
     */
    xor: function (a, b) {
        return (a || b) && !(a && b);
    },

    /**
     * It's used to take a string of comma separated names and turn it into an
     * `Array` of names. If an array of names is passed in, it's left as is.
     *
     * @example
     * _.normalizeArg("Birds, Insects, Flowers");
     * // returns ["Birds", "Insects", "Flowers"]
     *
     * @param {String|Array} arg either a comma separated string or an array
     * @return {Array} array of normalized names
     */
    normalizeArg: function (arg) {
        if (_.isString(arg)) {
            arg = arg.replace(/\s+/g, '').split(",");
        }

        if (!_.isArray(arg)) {
            arg = [arg];
        }

        return arg;
    },

    /**
     * Removes a property from an object and returns it if it exists
     *
     * @param {Object} obj object
     * @param {String} property property to pop off the object
     * @return {*} popped property
     */
    popProperty: function (obj, property) {
        var val = obj[property];
        delete obj[property];
        return val;
    }
    ,

    /**
     * Helper method to return a name without an extension
     *
     * @param {String} filename
     * @return {String} filename without an extension
     */
    removeExtension: function (filename) {
        return filename.replace(/\.(\w{3,4})$/, "");
    }
    ,

    /**
     * Return the file extension of a filename
     *
     * @param {String} filename
     * @return {String} lowercased extension
     */
    fileExtension: function (filename) {
        var fileParts = filename.split(".");
        return fileParts[fileParts.length - 1].toLowerCase();
    },

    /**
     * Returns the last element(s) in the array.
     * When [num] is passed, returns the last [num] elements in the array.
     *
     * @example
     *   [1,2,3].last()        -> 3
     *   [1,2,3].last(2)       -> [2,3]
     * @param {number} num number
     * @author Andrew Plummer
     * @returns {*} last element(s) in the array
     */
    lastElements: function(num) {
        if(isUndefined(num)) return this[this.length - 1];
        var start = this.length - num < 0 ? 0 : this.length - num;
        return this.slice(start);
    }
});