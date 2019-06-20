import { Router } from 'express';

import authRouter from './routes/auth';

// destructure all middlewares(validators) here if any.

const router = Router();

// general route
router.use('/auth', authRouter);

export default router;
