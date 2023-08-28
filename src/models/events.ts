import mongoose, { Document, Schema } from 'mongoose';

interface IEventData extends Document {
  id: string;
  owner: string;
  price: string;
}

interface ITransactionData extends Document {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;
  removed: boolean;
  address: string;
  data: string;
  topics: string[];
  transactionHash: string;
  logIndex: number;
  event: string;
  eventSignature: string;
}

interface IEvent extends Document {
  eventName: string;
  data: IEventData;
  transaction: ITransactionData;
}

const eventDataSchema = new Schema<IEventData>({
  id: String,
  owner: String,
  price: String,
});

const transactionDataSchema = new Schema<ITransactionData>({
  blockNumber: Number,
  blockHash: String,
  transactionIndex: Number,
  removed: Boolean,
  address: String,
  data: String,
  topics: [String],
  transactionHash: String,
  logIndex: Number,
  event: String,
  eventSignature: String,
});

const eventSchema = new Schema<IEvent>({
  eventName: String,
  data: eventDataSchema,
  transaction: transactionDataSchema,
});

const Event = mongoose.model<IEvent>('Event', eventSchema);

export default Event;
