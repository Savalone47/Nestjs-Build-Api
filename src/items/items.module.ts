import { Module } from '@nestjs/common';
import {  ItemsController } from './items.controller';
import { ItemsService} from './items.service';
import { ItemsModel } from './models/items.model';
import { MongooseModule  } from '@nestjs/mongoose';

@Module({
  imports: [ItemsModule, MongooseModule.forFeature([{name: 'Items', schema: ItemsModel}])],
  exports: [ItemsModule],
  controllers:[ItemsController],
  providers:[ItemsService],
})
export class ItemsModule {}
