import * as mongoose from 'mongoose';
export const ItemsModel = new mongoose.Schema({
  name: String,
  description: String,
  qty: Number
});
