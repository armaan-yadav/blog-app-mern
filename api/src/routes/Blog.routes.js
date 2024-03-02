import { Router } from "express";
import { create } from "../controllers/Blog.controller.js";
import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/" });

const router = Router();

router.post("/create", uploadMiddleware.single("file"), create);
export default router;
