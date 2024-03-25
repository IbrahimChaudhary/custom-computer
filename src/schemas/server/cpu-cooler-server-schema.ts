import mongoose from "mongoose";

const cpuCoolerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rpm: {
    type: Number,
    required: true,
  },
  noise_level: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const CPUCooler =
  mongoose.models.CPUCooler || mongoose.model("cpucooler", cpuCoolerSchema);

export default CPUCooler;
