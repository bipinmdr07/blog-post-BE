import HttpStatus from 'http-status-codes';
import axios from 'axios';

import config from '../config';

/**
 * Login the user into the system.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function login(req, res, next) {
  const loginPayload = req.body;

  try {
    res.status(HttpStatus.OK).json({ loginPayload });
  } catch (err) {
    next(err);
  }
}

/**
 * Handles the redirection from the github after oAuth login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function oauthAuthentication(req, res, next) {
  const { code } = req.query;
  const { clientId, clientSecret } = config.githubOauth;

  try {
    const { data } = await axios({
      method: 'POST',
      url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
      headers: {
        accept: 'application/json',
      },
    });

    const accessToken = data.access_token;

    res.redirect(
      `http://localhost:3000/auth/login?access_token=${accessToken}`
    );
  } catch (err) {
    next(err);
  }
}
