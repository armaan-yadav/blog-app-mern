import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: [50, "Blog Title can  not exceed 50 characters"],
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = model("Blog", blogSchema);
