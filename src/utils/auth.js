import TokenError from '../errors/token';
import * as jwtUtils from './jwt';

export function extractTokenFromHeaders(headers = {}) {
  const { authorization = '' } = headers;

  const [tokenType, token] = authorization.split(' ').filter(Boolean);

  if (tokenType !== 'Bearer' || !token) {
    throw new TokenError('Invalid Token');
  }

  jwtUtils.verifyToken(token);

  return {
    ok: true,
    token,
  };
}
