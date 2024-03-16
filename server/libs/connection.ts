import * as mongoose from 'mongoose';
import { config } from '../config';

export const connection = mongoose.createConnection(
  config.mongodb.uri,
  config.mongodb.options,
);
