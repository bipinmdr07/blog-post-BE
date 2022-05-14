import Boom from '@hapi/boom';
import isEmpty from 'lodash/isEmpty';

/**
 * Middleware to handle empty JSON body requests and other edge cases if any.
 *
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 */
export default function json(request, _, next) {
  const { body, method } = request;
  const disallowedHttpHeaders = ['PUT', 'POST', 'PATCH'];

  if (
    request.is('application/json') &&
    disallowedHttpHeaders.includes(method) &&
    isEmpty(body)
  ) {
    throw Boom.badRequest('Empty JSON');
  }

  next();
}
