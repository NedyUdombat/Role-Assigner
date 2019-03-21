import express from 'express';

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Welcome to Role Assigner!');
  });

app.listen(port);

export default app;
