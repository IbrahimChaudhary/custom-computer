import mongoose from "mongoose";

const motherboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  socket: {
    type: String,
    required: true,
  },
  form_factor: {
    type: String,
    required: true,
  },
  max_memory: {
    type: Number,
    required: true,
  },
  memory_slots: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Motherboard =
  mongoose.models.Motherboard ||
  mongoose.model("motherboard", motherboardSchema);

export default Motherboard;
