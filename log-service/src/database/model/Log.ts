import { Schema, model, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Log';
export const COLLECTION_NAME = 'logs';

export default interface Log extends Document {
  service: string;
  path: string;
  ip: string;
  uniqueid: string;
  method: string;
  headers: string;
  params: string;
  body: string;
  query: string;
  res_status: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    service: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    path: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    ip: {
      type: Schema.Types.String,
      maxlength: 20,
      trim: true,
    },
    uniqueid: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    method: {
      type: Schema.Types.String,
      required: true,
      maxlength: 6,
      trim: true,
    },
    headers: {
      type: Schema.Types.String,
      trim: true,
    },
    params: {
      type: Schema.Types.String,
      trim: true,
    },
    query: {
      type: Schema.Types.String,
      trim: true,
    },
    body: {
      type: Schema.Types.String,
      trim: true,
    },
    res_status: {
      type: Schema.Types.Number,
    },
    createdAt: {
      type: Date,
      required: true,
      select: false,
    },
    updatedAt: {
      type: Date,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
  },
).index(
  { service: 'text', params: 'text' },
  { weights: { title: 3, description: 1 }, background: false },
);

export const LogModel = model<Log>(DOCUMENT_NAME, schema, COLLECTION_NAME);
