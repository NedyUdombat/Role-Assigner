import { Router } from 'express';
import Randomizer from '../controllers/random';
import Get from '../controllers/get';

// destructure all controllers here if any.
const { teamLead, qa } = Randomizer;
const { getTl, getQa, getAllTms } = Get;

// destructure all middlewares(validators) here if any.
const router = Router();

// general route
router.get('/', (req, res) => {
  res.json({ message: 'Hi there! Welcome to version 1 of Role Assigner API!' });
});
router.get('/team-lead', getTl);
router.get('/qa', getQa);
router.get('/all', getAllTms);
router.post('/generate', teamLead);
router.post('/generate2', qa);


export default router;
