import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
const port: number | string = process.env.PORT || 5000;

dotenv.config();

// Database connect
async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log(colors.bgYellow.bold("✅ Database connected successfully"));

    //listening app
    app.listen(port, () => {
      console.log(colors.blue.bold(`Application listening on port ${port}`));
    });
  } catch (err) {
    console.log("🤢 Failed to connect database", err);
    process.exit();
  }
}

run();
