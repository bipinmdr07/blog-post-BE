import { Router } from 'express';

import * as authController from '../controllers/authController';

const router = Router();

/**
 * POST /api/v1/auth/login
 */
router.post('/login', authController.login);

router.get('/github/callback', authController.oauthAuthentication);

export default router;
