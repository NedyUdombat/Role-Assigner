import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Role Assigner!' });
});

app.use('/api/v1', router);

app.all('*', (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'The page you are looking for does not exist',
  }),
);

app.listen(port, () => {
  console.log(`app is live at http://127.0.0.1:${port}`);
});

export default app;
