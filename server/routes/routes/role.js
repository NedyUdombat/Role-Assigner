import { Router } from 'express';

import { getTeamLead } from '../controllers/role';
import { checkTeamExistence } from '../middlewares/team';

const roleRouter = Router();

roleRouter.get('/:id', checkTeamExistence, getTeamLead);

export default roleRouter;
