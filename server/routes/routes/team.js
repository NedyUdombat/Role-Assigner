import { Router } from 'express';

import { create } from '../controllers/team';
import { checkAuthorizedUser } from '../middlewares/authorized-user';
import { duplicateTeamValidation } from '../middlewares/team';

const teamRouter = Router();

teamRouter.post(
  '/create',
  checkAuthorizedUser,
  duplicateTeamValidation,
  create,
);

export default teamRouter;
