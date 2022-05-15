import User from '../models/user';

export const createUser = async params => {
  const result = await User.create(params);

  return result;
};

export const queryUser = async params => {
  const result = await User.fetch(params);

  return result;
};

export const queryUserByEmail = async email => {
  return await queryUser({
    IndexName: 'email_index',
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
  });
};
