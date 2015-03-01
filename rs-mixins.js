/**
 * rs-mixins v0.1 by point.of.presence
 * http://pointofpresence.ru
 * https://github.com/pointofpresence/rs-mixins
 */

_.mixin({
    /**
     It's used to take a string of comma separated names and turn it into an `Array`
     of names. If an array of names is passed in, it's left as is. Example usage:

     _.normalizeArg("Birds, Insects, Flowers");
     // returns ["Birds", "Insects", "Flowers"]

     @method normalizeArg
     @param {String|Array} arg - Either a comma separated string or an array
     @return {Array} array of normalized names
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
     Removes a property from an object and returns it if it exists

     @method popProperty
     @param {Object} obj
     @param {String} property - property to pop off the object
     @return {*} popped property
     */
    popProperty: function (obj, property) {
        var val = obj[property];
        delete obj[property];
        return val;
    },

    /**
     Helper method to return a name without an extension

     @method removeExtension
     @param {String} filename
     @return {String} filename without an extension
     */
    removeExtension: function (filename) {
        return filename.replace(/\.(\w{3,4})$/, "");
    },

    /**
     Return the file extension of a filename

     @method fileExtension
     @param {String} filename
     @return {String} lowercased extension
     */
    fileExtension: function (filename) {
        var fileParts = filename.split(".");
        return fileParts[fileParts.length - 1].toLowerCase();
    }
});