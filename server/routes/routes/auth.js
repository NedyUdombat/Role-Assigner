import { Router } from 'express';

import { validateNewUser } from '../middlewares/validate-input';
import { register, login } from '../controllers/auth';
import { duplicateUserValidation } from '../middlewares/auth';

const authRouter = Router();

authRouter.post(
  '/register',
  validateNewUser,
  duplicateUserValidation,
  register,
);

authRouter.post('/login', login);

export default authRouter;
