import mongoose from "mongoose";

const powerSupplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  efficiency: {
    type: String,
    required: true,
  },
  wattage: {
    type: Number,
    required: true,
  },
  modular: {
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

const PowerSupply =
  mongoose.models.PowerSupply ||
  mongoose.model("powersupply", powerSupplySchema);

export default PowerSupply;
