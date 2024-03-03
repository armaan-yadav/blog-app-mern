import { Router } from "express";
import {
  getUserById,
  loginUser,
  logout,
  profile,
  registerUser,
} from "../controllers/User.controllers.js";

const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/profile", profile);
router.post("/logout", logout);
router.post("/getUserById", getUserById);
export default router;
