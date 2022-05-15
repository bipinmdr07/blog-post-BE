import HttpStatus from 'http-status-codes';

import { extractTokenFromHeaders } from '../utils/auth';
import { verifyToken } from '../utils/jwt';

import * as blogService from '../services/blogService';

export async function addBlog(req, res, next) {
  let blog = req.body;

  const currentUser = verifyToken(extractTokenFromHeaders(req.headers).token);

  blog = { ...blog, userId: currentUser.userId };

  try {
    const data = await blogService.addBlog(blog);

    res.status(HttpStatus.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
}
