import { Router } from 'express';

import { validateNewUser } from '../middlewares/validate-input';
import { register } from '../controllers/auth';
import { duplicateUserValidation } from '../middlewares/auth';

const authRouter = Router();

authRouter.post(
  '/register',
  validateNewUser,
  duplicateUserValidation,
  register,
);

export default authRouter;
