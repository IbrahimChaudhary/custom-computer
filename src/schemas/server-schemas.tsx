import mongoose, { Schema } from "mongoose";

const userInfoSchema = new Schema({
  userName: String
});

const userSchema = new Schema({
  userInfo: userInfoSchema,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
