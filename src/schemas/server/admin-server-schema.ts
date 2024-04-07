import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  name: String,
  orders: [
    {
      customerEmail: String,
      buildID: String,
    },
  ],
});
const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
