import { Router } from 'express';

import { getTeamLead, resetRoles } from '../controllers/role';
import { checkTeamExistence } from '../middlewares/team';

const roleRouter = Router();

roleRouter.get('/:id', checkTeamExistence, getTeamLead);
roleRouter.patch('/:id', checkTeamExistence, resetRoles);

export default roleRouter;
