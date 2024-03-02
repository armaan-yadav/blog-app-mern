import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Password is required"],
      unique: [true, "Email already registered"],
    },
    password: {
      type: String,
      required: true,
      // minlength: [8, "Password must contain atleast 8 characters"],
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
