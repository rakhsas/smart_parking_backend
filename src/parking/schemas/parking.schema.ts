
import * as mongoose from 'mongoose';
// import { Parking } from './../../interfaces/parking.interface'
export const ParkingSchema = new mongoose.Schema({
    spaceId: String,
    availabilityStatus: String,
});

export const ParkingModel = mongoose.model('parkingModel', ParkingSchema);