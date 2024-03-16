import mongoose from 'mongoose';
import { connection } from '../libs/connection';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Category = connection.model('Category', categorySchema);
