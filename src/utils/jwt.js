import jwt from 'jsonwebtoken';

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export function createAccessToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });

  return token;
}
