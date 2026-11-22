import user from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all Fields",
      });
    }
    const userExists = await user.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({ email: email, password: hashPassword });
    return res
      .status(201)
      .json({
        success: true,
        message: "User Registration Successfull",
        user: newUser,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
