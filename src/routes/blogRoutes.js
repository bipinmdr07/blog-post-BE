import { Router } from 'express';

import * as blogsController from '../controllers/blogsController';

export const privateRouter = Router();
export const router = Router();

router.post('/', blogsController.addBlog);

router.get('/', blogsController.getBlogs);

privateRouter.put('/:blogId', blogsController.updateBlog);

// export default router;
