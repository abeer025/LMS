import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
      });
      console.log("DB Connected");
    }
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default connectDB;
