import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User.controllers.js";

const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
export default router;
