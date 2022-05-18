import redisClient from '../redis';
import Blog from '../models/blog';

export const fetchBlog = async blogId => {
  return await Blog.fetchByKey({ blogId });
};

export const createBlog = async params => {
  const blog = await Blog.create(params);

  redisClient.setEx(blog.blogId, 600, JSON.stringify(blog));

  return blog;
};

export const fetchBlogs = async (params = {}) => {
  const blogs = await redisClient.get('/blogs');

  if (blogs) {
    return JSON.parse(blogs);
  } else {
    const blogs = await Blog.fetch(params);

    // setting the time to 30s as this page is most likely to be fetched frequently.
    redisClient.setEx('/blogs', 30, JSON.stringify(blogs));

    return blogs;
  }
};

export const updateBlog = async (blogId, payload) => {
  // removing userId and blogId from payload.
  const { userId: _, blogId: __, ...rest } = payload;

  const { Attributes: response } = await Blog.update({ blogId }, rest);

  redisClient.del(blogId);
  redisClient.setEx(blogId, 600, JSON.stringify(response));

  return response;
};

export const deleteBlog = async blogId => {
  await Blog.delete({ blogId });

  redisClient.del(blogId);

  return { blogId };
};
