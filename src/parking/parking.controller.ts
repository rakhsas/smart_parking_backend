import { Controller, Get } from "@nestjs/common";
import { parkingService } from "./parking.service";
import { Parking } from "src/interfaces/parking.interface";

@Controller('parking')
export class ParkingController {

    constructor(
        private readonly parkingService: parkingService
    ) {}


    @Get()
    async getAllParkingSpaces(): Promise<Parking[]> {
      return this.parkingService.findAll();
    }
}