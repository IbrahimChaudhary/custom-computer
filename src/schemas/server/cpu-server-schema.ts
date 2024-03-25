import mongoose from "mongoose";

const cpuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  core_count: {
    type: Number,
    required: true,
  },
  core_clock: {
    type: Number,
    required: true,
  },
  boost_clock: {
    type: Number,
    required: true,
  },
  tdp: {
    type: Number,
    required: true,
  },
  graphics: {
    type: String,
    default: "",
  },
  smt: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const CPU = mongoose.models.CPU || mongoose.model("cpu", cpuSchema);

export default CPU;
