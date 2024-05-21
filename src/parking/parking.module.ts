import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { parkingService } from "./parking.service";
import { ParkingModel, ParkingSchema } from "./schemas/parking.schema";
import { ParkingController } from "./parking.controller";
// import { Parking } from "src/interfaces/parking.interface";
@Module({
    imports: [MongooseModule.forFeature([{ name: 'parkingModel', schema: ParkingSchema }])],
    controllers: [ParkingController],
    providers: [parkingService],
})
export class ParkingModule { }
