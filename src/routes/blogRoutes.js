import { Router } from 'express';

import * as blogsController from '../controllers/blogsController';

const router = Router();

router.post('/', blogsController.addBlog);

export default router;
