import { docClient } from '../db';
import Blog from '../models/blog';

export const addBlog = async params => {
  const blog = new Blog(params);

  try {
    await docClient
      .put({
        TableName: config.dynamoDB.tableName,
        Item: blog.toItem(),
      })
      .promise();

    return blog;
  } catch (error) {
    throw error;
  }
};
