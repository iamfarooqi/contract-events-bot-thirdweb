import * as fs from 'fs';
import 'dotenv/config';
import { Abi, Address } from '../utils/contract';
import { sdk } from '../config/config';

// This function listens to all the events emitted form the smart contract and will save the events to allEventsData.json

export async function listenToAllEvents() {
  console.log('Listening to events...');
  try {
    const AllEvents: Array<any> = [];
    const contract = await sdk.getContract(Address, Abi);
    contract.events.listenToAllEvents((event) => {
      console.log(event.eventName, 'eventName'); // the name of the emitted event

      const eventDetails = {
        eventName: event.eventName,
        eventData: event.data,
      };

      AllEvents.push(eventDetails);

      fs.writeFile('./allEventsData.json', JSON.stringify(AllEvents), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log({ message: 'Data updated successfully' });
        }
      });
    });
  } catch (error) {
    console.log('Error while listening to all Events: ', error);
  }
}
