import { Router } from "express";
import {
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

export default router;
