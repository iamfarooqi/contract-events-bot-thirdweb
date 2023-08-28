import Event from '../models/events';

export async function saveEventToMongoDB(event: any) {
  try {
    console.log(event, 'event');

    // Save the event to the database
    const newEvent = new Event(event);
    await newEvent.save();

    console.error('Event saved to MongoDB successfully:', newEvent.eventName);
  } catch (error) {
    console.error('Error saving event to MongoDB:', error);
  }
}
