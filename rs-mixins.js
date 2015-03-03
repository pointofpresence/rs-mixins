/**
 * rs-mixins v0.2 by point.of.presence
 * http://pointofpresence.ru
 * https://github.com/pointofpresence/rs-mixins
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
    },

    /**
     * Helper method to return a name without an extension
     *
     * @param {String} filename
     * @return {String} filename without an extension
     */
    removeExtension: function (filename) {
        return filename.replace(/\.(\w{3,4})$/, "");
    },

    /**
     * Return the file extension of a filename
     *
     * @param {String} filename
     * @return {String} lowercased extension
     */
    fileExtension: function (filename) {
        var fileParts = filename.split(".");
        return fileParts[fileParts.length - 1].toLowerCase();
    }
});