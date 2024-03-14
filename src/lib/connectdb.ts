import mongoose from "mongoose";

const connectdb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      if (!process.env.MONGODB_URI) {
        throw new Error("mongodb connection string not provided");
      }
      await mongoose.connect(process.env.MONGODB_URI);

      console.log("database connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;
