import { Schema, model, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Product';
export const COLLECTION_NAME = 'products';

export default interface Product extends Document {
  name: string;
  description: string;
  sku: string;
  categories: string;
  image: string;
  price: number;
  qty: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    sku: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    categories: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    image: {
      type: Schema.Types.String,
    },
    price: {
      type: Schema.Types.Number,
    },
    qty: {
      type: Schema.Types.Number,
    },
    createdAt: {
      type: Date,
      select: false,
    },
    updatedAt: {
      type: Date,
      select: false,
    },
  },
  {
    versionKey: false,
  },
).index({ name: 'text', description: 'text' });

export const ProductModel = model<Product>(DOCUMENT_NAME, schema, COLLECTION_NAME);
