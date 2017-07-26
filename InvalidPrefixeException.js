/**
 *
 *
 * @class invalidPrefixeException
 * @extends {Error}
 */
class InvalidPrefixeException extends Error {
    /**
     * Creates an instance of invalidPrefixeException.
     * @param {string} prefixe
     * @param {string} requiredPrefixe
     * @param {number} [code=405]
     * @memberof invalidPrefixeException
     */
  constructor (prefixe, requiredPrefixe, code = 405) {
    super('The following prefixe is invalid: ' + prefixe)
        /**
         * Fisherman code
         * @type {number}
         */
    this.code = code
        /**
         * the prefixe that doesn't match
         * @type {string}
         */
    this.prefixe = prefixe
        /**
         * The required prefixe to execute the function
         * @type {string}
         */
    this.requiredPrefixe = requiredPrefixe
  }
}
module.exports = InvalidPrefixeException
