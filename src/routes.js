import { Router } from 'express';

import authRoutes from './routes/authRoutes';

const publicRouter = Router();

publicRouter.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  })
})

publicRouter.use('/auth', authRoutes)


export { publicRouter }
