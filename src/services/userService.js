import config from '../config';
import { docClient } from '../db';
import User from '../models/user';

export const createUser = async params => {
  const user = new User(params);

  try {
    await docClient
      .put({
        TableName: config.dynamoDB.tableName,
        Item: user.toItem(),
        ConditionExpression: 'attribute_not_exists(email)',
      })
      .promise();

    return user;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
