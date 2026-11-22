import express from "express";
const router = express.Router();
import { signIn, signUp } from "../controller/user.controller.js";
router.route("/login").post(signIn);
router.route("/signUp").post(signUp);
export default router;
