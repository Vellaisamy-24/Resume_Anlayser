import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.mongoose_URL)

  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

import userRoutes from "./routes/user.route.js";
app.use("/api/user", userRoutes);

app.listen(3000, (req, res) => {
  console.log("Listenig to port 3500");
});
