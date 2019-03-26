import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cron from 'cron';
import router from './routes/index';
import Randomizer from './controllers/random';


const { teamLead } = Randomizer;


const { CronJob } = cron;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Role Assigner!' });
});

app.use('/api/v1', router);

app.all('*', (req, res) => res.status(404).json({
  status: 404,
  message: 'The page you are looking for does not exist',
}));

let x = 0;
const runner = () => new CronJob('* * * * * *', () => {
  // console.log(x);
  // teamLead();
  // x += 1;
}, null, true, 'Africa/Lagos');

runner();
// runner.stop();

app.listen(port, () => {
  console.log(`app is live at http://127.0.0.1:${port}`);
});

export default app;
