import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { Blog } from "../models/Blog.models.js";
cloudinary.config({
  cloud_name: "dhdshkjej",
  api_key: "986138284463286",
  api_secret: "1EI1p2QutrSP4dPYmg_UgQMuW8w",
});
export const create = asyncHandler(async (req, res, _) => {
  const { title, summary, description } = req.body;
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const extension = parts[parts.length - 1];
  const newPathName = path + "." + extension;
  fs.renameSync(path, newPathName);

  const temp = await cloudinary.uploader.upload(
    newPathName,
    { public_id: originalname },
    function (error, result) {
      console.log(result);
    }
  );

  const blog = await Blog.create({
    title,
    summary,
    content: description,
    imageUrl: temp.url,
  });

  return res.status(200).json({ blog });
});
