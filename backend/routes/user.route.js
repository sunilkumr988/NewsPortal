import express from "express";
import { updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utilis/verifyUser.js";

const router = express.Router()

router.put("/update/:userId",verifyToken, updateUser)
router.delete("/delete/:userId",verifyToken, deleteUser)



export default router