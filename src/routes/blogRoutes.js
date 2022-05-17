import { Router } from 'express';
import * as blogPolicy from '../middlewares/policies/blogPolicy';

import * as blogsController from '../controllers/blogsController';

export const privateRouter = Router();
export const router = Router();

router.post('/', blogPolicy.createBlog, blogsController.addBlog);

router.get('/', blogsController.getBlogs);

privateRouter.put(
  '/:blogId',
  blogPolicy.updateBlog,
  blogsController.updateBlog
);

privateRouter.delete(
  '/:blogId',
  blogPolicy.deleteBlog,
  blogsController.deleteBlog
);

// export default router;
