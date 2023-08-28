import axios from 'axios';
import * as fs from 'fs';
import 'dotenv/config';
import { Abi, Address } from '../utils/contract';
import { provider, sdk } from '../config/contract';
import { saveEventToMongoDB } from './saveEventsToDB';

// Function for getting the latest block
async function getLatestBlockNumber() {
  try {
    const response = await axios.post(process.env.RPC_URL as string, {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_blockNumber',
      params: [],
    });

    const blockNumberHex = response.data.result;
    const blockNumber = parseInt(blockNumberHex, 16);

    return blockNumber;
  } catch (error) {
    console.error('Error:', error);
  }
}

// With this function you can get all the events emitted in the past this will also save the events to the allEventsData.json
export async function eventsSetup() {
  try {
    const endBlock = await getLatestBlockNumber();

    let fromBlock = 19551834; // Start block
    let batchSize = 1000; // Number of blocks to fetch at a time

    if (endBlock && fromBlock >= endBlock) {
      console.log('No more blocks to process.');
      return;
    }

    let AllEvents: Array<any> = [];

    while (endBlock && fromBlock < endBlock) {
      let toBlock = fromBlock + batchSize;
      // Adjust the toBlock to not exceed endBlock
      toBlock = Math.min(toBlock, endBlock);

      console.log(`Fetching events from block ${fromBlock} to ${toBlock}`);

      const events = await getEvent({ fromBlock, toBlock });
      if (events) {
        for (let i = 0; i < events.length; i++) {
          const event = events[i];
          console.log(event, 'event>>');

          await saveEventToMongoDB(event);

          const block = await provider.getBlock(event.transaction.blockNumber);
          const timestamp = block.timestamp;
        }
      }

      // Update fromBlock and toBlock for the next iteration
      fromBlock = toBlock + 1;
    }

    // Write the modified data back to the data.json file
    fs.writeFile(
      './allEventsData.json',
      JSON.stringify(JSON.stringify(AllEvents)),
      (err) => {
        if (err) {
          console.error(err);
          // Handle the error, e.g., send an HTTP response
          // res.status(500).end();
        } else {
          console.log({ message: 'Data updated successfully' });
        }
      }
    );
  } catch (error) {
    console.log('Error: ', error);
  }
}

async function getEvent({ fromBlock, toBlock }: any) {
  try {
    const contract = await sdk.getContract(Address, Abi);

    const filter = {
      fromBlock: fromBlock,
      toBlock: toBlock,
    };

    const events = await contract.events.getAllEvents(filter);

    return events;
  } catch (error) {
    console.log('Error: ', error);
  }
}
