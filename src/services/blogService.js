import Blog from '../models/blog';

export const createBlog = async params => {
  return await Blog.create(params);
};

export const fetchBlogs = async (params = {}) => {
  return await Blog.fetch(params);
};

export const updateBlog = async (blogId, payload) => {
  // removing userId and blogId from payload.
  const { userId: _, blogId: __, ...rest } = payload;

  const { Attributes: response } = await Blog.update({ blogId }, rest);

  return response;
};
