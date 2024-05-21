
import * as mongoose from 'mongoose';
// import { Parking } from './../../interfaces/parking.interface'
export const ParkingSchema = new mongoose.Schema({
    spaceId: String,
    availabilityStatus: String,
});

// const parkingSchema = mongoose.model('Parking', parkingSchema)
// export const Parking = mongoose.model('Parking', ParkingSchema);