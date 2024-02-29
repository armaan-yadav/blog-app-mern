import { User } from "../models/User.models.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (name == "" || password == "") {
    throw new ApiError(400, "Email and password is mandatory");
  }
  //checking of the user already exists
  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    throw new ApiError(400, "User already exists.Please login");
  }
  //creating  a new user
  const newUser = await User.create({ email, name, password });
  if (!newUser) {
    throw new ApiError(
      500,
      "Error while creating a new User. Please try again"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "User regsitered Successfully", newUser));
});
