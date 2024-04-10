import { MONGO_URI } from "@/utils/config";
import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(MONGO_URI, {
      connectTimeoutMS: 3000,
    })
    .catch((err) => console.log(`Error connecting to DB: ${err}`));

  mongoose.connection.on("connected", () => {
    console.log("Connected to DB");
  });

  mongoose.connection.on("error", () => {
    console.log("Error connecting to DB");
  });
};

export default connectDB;
