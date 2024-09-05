import mongoose from "mongoose";

export const connectDatabase = () => {
  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  mongoose.connect(DB).then(() => console.log("MongoDB Database connected "));
};
