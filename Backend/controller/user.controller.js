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
      return res.status(409).json({
        success: false,
        message: "User Already Exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({ email: email, password: hashPassword });
    return res.status(201).json({
      success: true,
      message: "User Registration Successfull",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }
    const userEsists = await user.findOne({ email: email });
    if (!userEsists) {
      return res.status(404).json({
        success: false,
        message: "User Not Exists",
      });
    }
    const validatePassword = await bcrypt.compare(
      password,
      userEsists.password,
    );
    if (!validatePassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Passsword",
      });
    }
    const token = jwt.sign({ userId: userEsists._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      success: true,
      message: "SignIn Successfull",
      user: {
        id: userEsists._id,
        email: userEsists.email,
      },
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { signIn, signUp };
