import { Injectable } from '@nestjs/common';
import { ItemsInterface } from './interfaces/items.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Items') private readonly itemModel: Model<ItemsInterface>) {}

  async findAll(): Promise<ItemsInterface[]>{
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<ItemsInterface>{
    return await this.itemModel.findOne({ _id: id });
  }
  async create(item: ItemsInterface): Promise<ItemsInterface>{
    const newItem = new this.itemModel(item);
    return newItem.save();
  }
  async delete(id: string): Promise<ItemsInterface>{
    return await this.itemModel.findByIdAndRemove(id);
  }
  async update(id: string, item: ItemsInterface): Promise<ItemsInterface>{
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
