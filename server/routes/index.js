import { Router } from 'express';
import Randomizer from '../controllers/random';
import Get from '../controllers/get';

// destructure all controllers here if any.
const { teamLead } = Randomizer;
const { getTl, getQa } = Get;

// destructure all middlewares(validators) here if any.
const router = Router();

// general route
router.get('/', (req, res) => {
  res.json({ message: 'Hi there! Welcome to version 1 of Role Assigner API!' });
});
router.get('/team-lead', getTl);
router.get('/qa', getQa);
router.post('/generate', teamLead);


export default router;
