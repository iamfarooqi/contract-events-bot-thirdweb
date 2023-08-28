import express from 'express';
import { Request, Response } from 'express';
import { listenToAllEvents } from './controller/listenToAllEvents';
import connectDB from './config/dataBase';
import { eventsSetup } from './controller/getEvents';
const app = express();
const port = 5000;

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});
eventsSetup();
// listenToAllEvents();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
