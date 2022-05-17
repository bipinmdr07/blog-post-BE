import { Router } from 'express';

import authRoutes from './routes/authRoutes';
import {
  // privateRouter as blogPrivateRouter,
  router as blogPublicRouter,
} from './routes/blogRoutes';

const publicRouter = Router();

publicRouter.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

publicRouter.use('/auth', authRoutes);
publicRouter.use('/blogs', blogPublicRouter);

const privateRouter = Router();

export { publicRouter, privateRouter };
