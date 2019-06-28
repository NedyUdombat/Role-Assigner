import { Router } from 'express';

import { create, getTeam } from '../controllers/team';
import { checkAuthorizedUser } from '../middlewares/authorized-user';
import { duplicateTeamValidation } from '../middlewares/team';

const teamRouter = Router();

teamRouter.post(
  '/create',
  checkAuthorizedUser,
  duplicateTeamValidation,
  create,
);

teamRouter.get('/:id', getTeam);

export default teamRouter;
