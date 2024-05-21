import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ParkingModule } from './parking/parking.module';
@Module({
  imports: [
    // DatabaseModule
    MongooseModule.forRoot('mongodb+srv://rakhsas:RAkhsasrida42@cluster0.rp1nzfn.mongodb.net/parking?retryWrites=true&w=majority&appName=Cluster0'),
    ParkingModule,
    // MongooseModule.forRoot('mongodb+srv://mustaphadaoudi117:Oumaima123@@@mycluster.qjyi6wy.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')

  ],
  controllers: [AppController],
  providers: [
    AppService,
    // ...parkingProvider
  ]
})
export class AppModule {}
