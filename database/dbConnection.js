import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error("MONGO_URI environment variable is not defined");
    return;
  }

  mongoose
    .connect(mongoUri, {
      dbName: "Restaurant",
    })
    .then(() => {
      console.log("Connected to db successfully");
    })
    .catch((err) => {
      console.log(`Error occurred: ${err}`);
    });
};