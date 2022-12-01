import bcrypt from "bcrypt";
import validator from "validator";
import { sendError, sendSuccess } from "../helpers.js";
import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    // Get the data from the request body
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;

    // Validate the data
    if (!firstName) return next(sendError(res, "First name is required!"));
    if (!lastName) return next(sendError(res, "Last name is required!"));
    if (!email) return next(sendError(res, "Email is required!"));
    if (!validator.isEmail(email))
      return next(sendError(res, "Email is invalid!"));
    if (!phone) return next(sendError(res, "Phone is required!"));
    if (!validator.isMobilePhone(phone, "vi-VN"))
      return next(sendError(res, "Phone is invalid!"));
    if (!password) return next(sendError(res, "Password is required!"));
    if (!validator.isLength(password, { min: 8, max: 32 }))
      return next(
        sendError(res, "Password must be between 8 and 32 characters!")
      );
    if (!confirmPassword)
      return next(sendError(res, "Confirm password is required!"));
    if (password !== confirmPassword)
      return next(sendError(res, "Passwords do not match!"));

    // Check if the user already exists with the same email
    const userAlreadyExistsWithEmail = await User.exists({ email });
    if (userAlreadyExistsWithEmail)
      return next(sendError(res, "Email already exists!"));

    // Check if the user already exists with the same phone
    const userAlreadyExistsWithPhone = await User.exists({ phone });
    if (userAlreadyExistsWithPhone)
      return next(sendError(res, "Phone already exists!"));

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
      picturePath: req.file ? req.file.filename : null,
    });
    await newUser.save();

    return next(sendSuccess(res, "User created successfully!", null, 201));
  } catch (error) {
    next(error);
  }
};
