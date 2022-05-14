import * as jwt from '../utils/jwt';

export function loginForOauthUser(user) {
  const payload = {
    userId: user.userId,
    email: user.email,
    username: user.username,
    name: user.name,
    avatarUrl: user.avatarUrl,
  };

  const accessToken = jwt.createAccessToken(payload);

  console.log({ accessToken });

  return {
    accessToken,
  };
}
