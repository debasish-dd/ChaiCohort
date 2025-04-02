import express from "express"
import { registerUser , verifyUser, login, getMe } from "../controller/user.controller.js";
import { isLogedIn } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/register", registerUser)
router.get("/verify/:token", verifyUser)
router.get("/login", login)
router.get("/profile", isLogedIn , getMe)

export default router;