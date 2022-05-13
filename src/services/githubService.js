import axios from 'axios';
import config from '../config';

export async function getAccessToken(code) {
  const { clientId, clientSecret } = config.githubOauth;
  const {
    data: { access_token: accessToken },
  } = await axios({
    method: 'POST',
    url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  });

  return accessToken;
}

export async function getUserInfo(token) {
  const { data } = await axios({
    method: 'GET',
    url: 'https://api.github.com/user',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
