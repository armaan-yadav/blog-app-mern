import { Router } from "express";
import { registerUser } from "../controllers/User.controllers.js";

const router = Router();

router.post("/signup", registerUser);
export default router;
