import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  speed: {
    type: [Number],
    required: true,
  },
  modules: {
    type: [Number],
    required: true,
  },
  price_per_gb: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  first_word_latency: {
    type: Number,
    required: true,
  },
  cas_latency: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Memory = mongoose.models.Memory || mongoose.model("memory", memorySchema);

export default Memory;
 