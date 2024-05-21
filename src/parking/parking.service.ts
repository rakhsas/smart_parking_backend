import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ParkingSchema } from "./schemas/parking.schema";
import { Parking } from "src/interfaces/parking.interface";
import { Model } from "mongoose";
@Injectable()
export class parkingService {
    /**
     *
     */
    constructor(
        @InjectModel('Parking') private readonly parkingModel: Model<Parking>,
    ) {
    }

    async findAll(): Promise<Parking[]> {
        const books = await this.parkingModel.find().exec();
        return books;
      }

}