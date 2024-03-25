import mongoose from "mongoose";

const networkCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  protocol: {
    type: String,
    required: true,
  },
  interface: {
    type: String,
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

const NetworkCard =
  mongoose.models.NetworkCard ||
  mongoose.model("networkcard", networkCardSchema);

export default NetworkCard;
