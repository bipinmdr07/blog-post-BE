import HttpStatus from 'http-status-codes';

import TokenError from '../errors/token';
import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';

/**
 * Build error response for validation errors.
 *
 * @param {Error} err
 * @returns {Object}
 */
function buildError(err) {
  // Custom errors
  if (err.isCustom) {
    if (err instanceof TokenError) {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message:
          err.message || HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
      };
    } else {
      return {
        code: HttpStatus.UNAUTHORIZED,
        message:
          err.message || HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
      };
    }
  }

  // Token validation error.
  if (err instanceof JsonWebTokenError) {
    return {
      code: HttpStatus.UNAUTHORIZED,
      message: err.message || HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
    };
  }

  if (err instanceof TokenExpiredError) {
    return {
      code: HttpStatus.UNAUTHORIZED,
      message: err.message || HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED),
    };
  }

  // HTTP errors.
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error,
    };
  }

  // Return INTERNAL_SERVIER_ERROR for all other cases.
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
  };
}

export default buildError;
