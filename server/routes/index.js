import { Router } from 'express';
import Randomizer from '../controllers/random';

const { teamLead } = Randomizer;
// destructure all controllers here if any.


// destructure all middlewares(validators) here if any.
const router = Router();

// general route
router.get('/', (req, res) => {
  res.json({ message: 'Hi there! Welcome to version 1 of Role Assigner API!' });
});

router.post('/generate', teamLead);


export default router;
