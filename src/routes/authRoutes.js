import { Router } from 'express';

import * as authController from '../controllers/authController';

const router = Router();

/**
 * POST /api/v1/auth/login
 */
router.post('/login', authController.login);

export default router;
