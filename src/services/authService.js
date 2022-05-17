import { USER } from '../constants/roles';
import * as jwt from '../utils/jwt';
import * as userServices from './userService';

export async function loginForOauthUser(userData) {
  const userPayload = {
    name: userData.name,
    email: userData.email,
    username: userData.login,
    avatarUrl: userData.avatar_url,
    roles: [USER],
  };

  let user = {};

  const { Items: items, Count: count } = await userServices.queryUsers();

  if (!count) {
    const { Item: item } = await userServices.createUser(userPayload);

    user = item;
  } else {
    user = items[0];
  }

  const tokenPayload = {
    userId: user.userId,
    email: user.email,
    name: user.name,
    avatarUrl: user.avatarUrl,
    username: user.username,
    roles: user.roles,
  };

  const accessToken = jwt.createAccessToken(tokenPayload);

  return {
    accessToken,
  };
}
