import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { Blog } from "../models/Blog.models.js";
import jwt from "jsonwebtoken";
const secret = "aslkdhqw78eq87wyehauskd";
cloudinary.config({
  cloud_name: "dhdshkjej",
  api_key: "986138284463286",
  api_secret: "1EI1p2QutrSP4dPYmg_UgQMuW8w",
});
export const create = asyncHandler(async (req, res, _) => {
  const { token } = req.cookies;
  const { title, summary, description } = req.body;
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const extension = parts[parts.length - 1];
  const newPathName = path + "." + extension;
  fs.renameSync(path, newPathName);
  const temp = await cloudinary.uploader.upload(newPathName, {
    public_id: originalname,
  });
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const blog = await Blog.create({
      title,
      summary,
      content: description,
      imageUrl: temp.url,
      owner: info.id,
    });
    res.json(blog);
  });
});
export const allBlogs = asyncHandler(async (req, res, _) => {
  const posts = await Blog.find();
  res.status(200).json(posts);
});
export const getBlogById = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);
  return res.status(200).json(blog);
});
