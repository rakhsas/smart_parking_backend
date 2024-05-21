import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ParkingModel, ParkingSchema } from "./schemas/parking.schema";
// import { Parking } from "src/interfaces/parking.interface";
import { Model } from "mongoose";
@Injectable()
export class parkingService {
    /**
     *
     */
    constructor(
        @InjectModel('parkingModel') private readonly parkingModel: any,
    ) {
    }

    async findAll(): Promise<any[]> {
        try {
            const data = await this.parkingModel.find().exec();
            return data;

        } catch (error) {
            console.log(error);
        }
      }

}