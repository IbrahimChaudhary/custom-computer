import mongoose from "mongoose";

const graphicsCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  chipset: {
    type: String,
    required: true,
  },
  memory: {
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
  color: {
    type: String,
    default: "",
  },
  length: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const GraphicsCard =
  mongoose.models.GraphicsCard ||
  mongoose.model("graphicscard", graphicsCardSchema);

export default GraphicsCard;
