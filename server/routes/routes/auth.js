import { Router } from 'express';

import {
  validateNewUser,
  validateReqBody,
} from '../middlewares/validate-input';
import { register, login } from '../controllers/auth';
import { duplicateUserValidation } from '../middlewares/auth';
import { loginSchema, signupSchema } from '../../utils/validation-schema.utils';

const authRouter = Router();

authRouter.post(
  '/register',
  validateReqBody(signupSchema),
  duplicateUserValidation,
  register,
);

authRouter.post('/login', validateReqBody(loginSchema), login);

export default authRouter;
