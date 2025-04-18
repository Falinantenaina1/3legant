import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("The database is connected");
  } catch (error) {
    console.error({ error });
  }
};

export default connectDb;
