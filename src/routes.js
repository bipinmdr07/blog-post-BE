import { Router } from 'express';

import authRoutes from './routes/authRoutes';
import blogRoutes from './routes/blogRoutes';

const publicRouter = Router();

publicRouter.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version,
  });
});

publicRouter.use('/auth', authRoutes);

const privateRouter = Router();

privateRouter.use('/blogs', blogRoutes);

export { publicRouter, privateRouter };
