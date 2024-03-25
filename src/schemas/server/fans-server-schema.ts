import mongoose from "mongoose";

const fanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  rpm: {
    type: [Number],
    required: true,
  },
  airflow: {
    type: Number,
    default: null,
  },
  noise_level: {
    type: Number,
    default: null,
  },
  pwm: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Fan = mongoose.models.Fan || mongoose.model("fan", fanSchema);

export default Fan;
