import express from "express";
import { signup } from "../controllers/auth.controller.js" // Correct path

 // Fixed import path

const router = express.Router();  // Use express.Router()

router.post("/signup", signup);  // Define the signup route

export default router;
