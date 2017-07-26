/**
 *
 *
 * @class RequiredPrefixe
 */
const InvalidPrefixeException = require('./InvalidPrefixeException')
class RequiredPrefixe {
    /**
     * Creates an instance of RequiredPrefixe.
     * @param {PrefixeOptions} [options={}]
     * @memberof RequiredPrefixe
     */
  constructor (options = {}) {
    this.conf = Object.assign({ sendCode: false, code: 405 }, options)
  }
  handle (req, res, next) {
    if (req.isCommand && req.command.locales.requiredPrefixe !== req.prefix) {
      if (this.conf.sendCode) res.sendCode(this.conf.code, new InvalidPrefixeException(req.prefix, req.command.locales.requiredPrefixe, this.conf.code))
      else next(true)
    }
  }
}
/**
 * @typedef {Object} PrefixeOptions
 * @property {boolean} [sendCode=false] If it should sendCode with an InvalidPrefixeException when the prefixe is not respected
 * @property {number} [code=405] The code sent if sendCode is set to true
 */
module.exports = RequiredPrefixe
