import HttpStatus from 'http-status-codes';

import { extractTokenFromHeaders } from '../utils/auth';
import { verifyToken } from '../utils/jwt';

import * as blogService from '../services/blogService';

export async function addBlog(req, res, next) {
  let blog = req.body;

  const currentUser = verifyToken(extractTokenFromHeaders(req.headers).token);

  blog = { ...blog, userId: currentUser.userId };

  try {
    const { Item: item } = await blogService.createBlog(blog);

    res.status(HttpStatus.CREATED).json(item);
  } catch (err) {
    next(err);
  }
}

export async function getBlogs(req, res, next) {
  try {
    const { Items: items } = await blogService.fetchBlogs();

    res.status(HttpStatus.OK).json(items);
  } catch (err) {
    next(err);
  }
}
