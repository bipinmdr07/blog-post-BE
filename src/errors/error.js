/**
 * Base class for custom error.
 */
class BaseError extends Error {
  /**
   * Constructor method for BaseError.
   *
   * @param {String} message
   */
  constructor(message = '') {
    super(message);
    // Flag to use for distinguishing custom error from other errors.
    this.isCustom = true;
  }
}

export default BaseError;
