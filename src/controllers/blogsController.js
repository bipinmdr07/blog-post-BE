import HttpStatus from 'http-status-codes';

import { extractTokenFromHeaders } from '../utils/auth';
import { verifyToken } from '../utils/jwt';

export async function addBlog(req, res, next) {
  let blog = request.body;
  const currentUser = verifyToken(extractTokenFromHeaders(req.headers));

  blog = { ...blog, userId: currentUser.userId };

  try {
    const data = await blogService.addBlog(blog);

    res.status(HttpStatus.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
}
