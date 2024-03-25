import mongoose from "mongoose";

const storageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price_per_gb: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cache: {
    type: Number,
    required: true,
  },
  form_factor: {
    type: String,
    required: true,
  },
  interface: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Storage =
  mongoose.models.Storage || mongoose.model("storage", storageSchema);

export default Storage;
