import { Router } from "express";
import {
  allBlogs,
  create,
  getBlogById,
} from "../controllers/Blog.controller.js";
import multer from "multer";
import { getUserById } from "../controllers/User.controllers.js";
const uploadMiddleware = multer({ dest: "uploads/" });

const router = Router();

router.post("/create", uploadMiddleware.single("file"), create);
router.get("/all-blogs", allBlogs);
router.post("/getBlogById/:blogId", getBlogById);

export default router;
