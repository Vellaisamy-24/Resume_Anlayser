import mongoose from "mongoose";
const userScheme = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
  },
  { timestamps: true },
);
const user = new mongoose.model("User", userScheme);
export default user;
