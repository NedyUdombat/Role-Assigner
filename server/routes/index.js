import { Router } from 'express';

import authRouter from './routes/auth';
import teamRouter from './routes/team';

// destructure all middlewares(validators) here if any.

const router = Router();

// general route
router.use('/auth', authRouter);
router.use('/team', teamRouter);

export default router;
