import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userEmail: String,
  builds: [
    {
      name: String,
      status: {
        type: String,
        default: "regular",
      },
      inCart: {
        type: Boolean,
        default: false,
      },
      parts: [
        {
          id: String,
          type: String,
        },
      ],
    },
  ],
  // created_at: {
  //   type: Date,
  //   default: Date.now,
  // },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
