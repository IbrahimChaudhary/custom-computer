import mongoose, { Schema } from "mongoose";

const caseSchema = new Schema({
  name: String,
  price: Number,
  type: String,
  color: String,
  psu: String,
  side_panel: String,
  external_volume: Number,
  internal_35_bays: Number,
});

// Use mongoose.models.Case to check if the model already exists
const Case = mongoose.models.Case || mongoose.model("Case", caseSchema);

export default Case;
