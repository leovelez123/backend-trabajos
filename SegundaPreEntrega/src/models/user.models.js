import mongoose, { Schema } from "mongoose";

const productsColection = 'products';

const ProductSchema = new Schema({
    id: { type: Schema.Types.Number, require: true },
  name: { type: Schema.Types.String, require: true },
  price: { type: Schema.Types.Number, require: true },
  
  
});

export default mongoose.model(productsColection, ProductSchema);