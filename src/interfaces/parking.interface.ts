
import { Document } from 'mongoose';

export interface Parking extends Document {
  readonly spaceId: string;
  readonly availabilityStatus: string;
}