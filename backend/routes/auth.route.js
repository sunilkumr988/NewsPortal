import express from "express";
import { signup, signin } from "../controllers/auth.controller.js" // Correct path
 // Fixed import path

const router = express.Router();  // Use express.Router()

router.post("/signup", signup);  // Define the signup route
router.post("/signin", signin);  // Define the signin route

export default router;
