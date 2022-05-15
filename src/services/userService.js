import User from '../models/user';

export const createUser = async params => {
  return await User.create(params);
};

export const queryUsers = async params => {
  return await User.fetch(params);
};

export const queryUserByEmail = async email => {
  return await queryUsers({
    IndexName: 'email_index',
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
  });
};
