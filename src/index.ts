import express from 'express';
import { Request, Response } from 'express';
import { listenToAllEvents } from './controller/listenToAllEvents';
const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

listenToAllEvents();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
