import express from 'express';
import { Request, Response } from 'express';
import { eventsSetup, listenToAllEvents } from './Controller/getEvents';
const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// eventsSetup();

listenToAllEvents();
async function yourControllerFunction() {
  try {
    // Call the listenToAllEvents function to start listening to events
    console.log('Listening to events...');
  } catch (error) {
    console.error('Error: ', error);
  }
}

// Call your controller function to start listening to events
yourControllerFunction();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
