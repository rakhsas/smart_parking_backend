import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParkingSchema } from './parking/schemas/parking.schema'
import { Parking } from './interfaces/parking.interface';
interface IAppService {
  spaceId: string;
  availabilityStatus: string;
}

@Injectable()
export class AppService implements OnModuleInit {


  data: IAppService[] = [];
  onModuleInit() {
    // this.init();
    // check connection state
    // console.log('connection state', this.parkingModel.db.readyState);
  }
  init() {
    this.data = [
      {
        spaceId: '1000',
        availabilityStatus: 'Occupied',
      },
      {
        spaceId: '2',
        availabilityStatus: 'Empty',
      },
      {
        spaceId: '3',
        availabilityStatus: 'Occupied',
      },
      {
        spaceId: '4',
        availabilityStatus: 'Empty',
      },
      {
        spaceId: '5',
        availabilityStatus: 'Occupied',
      },
      {
        spaceId: '6',
        availabilityStatus: 'Empty',
      },
      {
        spaceId: '7',
        availabilityStatus: 'Occupied',
      },
      {
        spaceId: '8',
        availabilityStatus: 'Empty',
      },
      {
        spaceId: '9',
        availabilityStatus: 'Occupied',
      },
      {
        spaceId: '10',
        availabilityStatus: 'Empty',
      },
    ];
  }
  getHello(): IAppService[] {
    return this.data;
  }
}
