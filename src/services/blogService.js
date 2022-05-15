import Blog from '../models/blog';

export const createBlog = async params => {
  return await Blog.create(params);
};

export const fetchBlogs = async (params = {}) => {
  return await Blog.fetch(params);
};
