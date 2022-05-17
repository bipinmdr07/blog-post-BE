import { unauthorized } from '@hapi/boom';
import {
  CREATE_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
} from '../../constants/permissions';
import { fetchBlog } from '../../services/blogService';
import { extractTokenFromHeaders } from '../../utils/auth';
import { verifyToken } from '../../utils/jwt';
import { hasPermission } from '../../utils/permission';

export async function createBlog(req, res, next) {
  const currentUser = verifyToken(extractTokenFromHeaders(req.headers).token);

  if (hasPermission(currentUser, CREATE_BLOG)) {
    next();
  } else {
    next(unauthorized('Not authrorized'));
  }
}

export async function updateBlog(req, res, next) {
  const { blogId } = req.params;
  const currentUser = verifyToken(extractTokenFromHeaders(req.headers).token);
  const { Item: blog } = await fetchBlog(blogId);

  console.log(hasPermission(currentUser, UPDATE_BLOG));

  if (
    hasPermission(currentUser, UPDATE_BLOG) &&
    currentUser.userId === blog.userId
  ) {
    next();
  } else {
    next(unauthorized('Not authorized'));
  }
}

export async function deleteBlog(req, res, next) {
  const { blogId } = req.params;
  const currentUser = verifyToken(extractTokenFromHeaders(req.headers).token);
  const { Item: blog } = await fetchBlog(blogId);

  if (
    hasPermission(currentUser, DELETE_BLOG) &&
    currentUser.userId === blog.userId
  ) {
    next();
  } else {
    next(unauthorized('Not authorized'));
  }
}
