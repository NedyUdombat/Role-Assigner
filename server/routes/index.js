import { Router } from 'express';

import { randomizer } from '../controllers/random';

// destructure all middlewares(validators) here if any.

const router = Router();

// general route
router.get('/random', randomizer);

export default router;
