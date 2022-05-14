import TokenError from '../errors/token';
import { extractTokenFromHeaders } from '../utils/auth';

export function authenticateUser(req, res, next) {
  try {
    const { ok } = extractTokenFromHeaders(req.headers);

    if (!ok) {
      throw new TokenError('Invalid Token');
    }

    next();
  } catch (err) {
    next(err);
  }
}
