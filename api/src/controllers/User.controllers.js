import { User } from "../models/User.models.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = "aslkdhqw78eq87wyehauskd";
export const registerUser = asyncHandler(async (req, res, _) => {
  const { name, email, password } = req.body;
  if (name == "" || password == "") {
    res.status(400).json({ message: "Email and password is mandatory" });
    throw new ApiError(400, "Email and password is mandatory");
  }
  //checking of the user already exists
  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    res.status(400).json({ message: "User already exists.Please login" });
    throw new ApiError(400, "User already exists.Please login");
  }
  //creating  a new user
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({ email, name, password: hashPassword });
  if (!newUser) {
    res
      .status(500)
      .json({ message: "Error while creating a new User. Please try again" });
    throw new ApiError(
      500,
      "Error while creating a new User. Please try again"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "User regsitered Successfully", newUser));
});

export const loginUser = asyncHandler(async (req, res, _) => {
  const { email, password } = req.body;
  if (email == "" || password == "") {
    res.status(400).json({ message: "Email and Password is required" });
    throw new ApiError(400, "Email and password is required");
  }

  //   check if the user exists
  const userExists = await User.findOne({ email });
  if (!userExists) {
    res
      .status(401)
      .json({ message: "Email is not registered. Please register first" });
    throw new ApiError(401, "Email is not registered. Please register first");
  }

  //check for password
  const isPasswordCorrect = bcrypt.compareSync(password, userExists.password);
  if (isPasswordCorrect) {
    // jwt
    jwt.sign(
      { email, id: userExists._id, name: userExists.name },
      secret,
      {},
      (err, token) => {
        if (err) {
          throw err;
        }
        return res
          .cookie("token", token)
          .json({ id: userExists._id, name: userExists.name });
      }
    );
  } else {
    res.status(401).json({ message: "Invalid Password. Please try again" });
    throw new ApiError(401, "Invalid Password. Please try again");
  }

  //   return res
  //     .status(200)
  //     .json(new ApiResponse(200, "User logged in Successfully", userExists));
});

export const profile = asyncHandler(async (req, res, _) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "no profile found" });
  }
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

export const logout = asyncHandler(async (req, res, _) => {
  res.cookie("token", "").json("ok");
});
