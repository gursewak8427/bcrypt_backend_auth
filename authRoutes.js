import express from "express"
import { loginController, registerController } from "./controller.js";

const authRoutes = express.Router();

// Register
authRoutes.post("/register", registerController)


// Login
authRoutes.post("/login", loginController)


export default authRoutes;