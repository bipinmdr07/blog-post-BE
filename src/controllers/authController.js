import HttpStatus from 'http-status-codes';

/**
 * Login the user into the system.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function login(req, res, next) {
  const loginPayload = req.body;

  try {
    res.status(HttpStatus.OK).json({ loginPayload });
  } catch (err) {
    next(err);
  }
}
