import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { accessTokenExpiresIn, refreshTokenExpiresIn } from "../constants.js";
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

    // Send the response
    return next(sendSuccess(res, "User created successfully!", null, 201));
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    // Get the data from the request body
    const { email, phone } = req.body;

    // Validate the data
    if (!email && !phone)
      return next(sendError(res, "Enter an email or phone number"));
    if (
      (email && !validator.isEmail(email)) ||
      (phone && !validator.isMobilePhone(phone, "vi-VN"))
    )
      return next(sendError(res, "Enter a valid email or phone number"));
    if (!req.body.password) return next(sendError(res, "Enter a password"));

    // Check if the user exists
    const user = await User.findOne({ $or: [{ email }, { phone }] });
    if (!user) return next(sendError(res, "User does not exist"));

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(sendError(res, "Password is incorrect"));

    // Generate the accessToken and refreshToken
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: accessTokenExpiresIn,
      }
    );
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: refreshTokenExpiresIn,
      }
    );

    // Send HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Only server can access the cookie
      expires: new Date(Date.now() + 1000 * 24 * 60 * 60), // 1 day
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
    });

    const { __v, password, ...rest } = user._doc;

    // Send the response
    return next(
      sendSuccess(
        res,
        "User logged in successfully!",
        { accessToken, refreshToken, user: rest },
        200
      )
    );
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    // Clear the cookie
    res.clearCookie("refreshToken");

    // Send the response
    return next(sendSuccess(res, "User logged out successfully!"));
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { userId } = req;
    const { firstName, lastName, email, phone } = req.body;

    if (!firstName) return next(sendError(res, "First name is required!"));
    if (!lastName) return next(sendError(res, "Last name is required!"));
    if (!email) return next(sendError(res, "Email is required!"));
    if (!validator.isEmail(email))
      return next(sendError(res, "Email is invalid!"));
    if (!phone) return next(sendError(res, "Phone is required!"));
    if (!validator.isMobilePhone(phone, "vi-VN"))
      return next(sendError(res, "Phone is invalid!"));

    const user = await User.findById(userId);

    if (user.email !== email) {
      const userAlreadyExistsWithEmail = await User.exists({ email });
      if (userAlreadyExistsWithEmail)
        return next(sendError(res, "Email already exists!"));
    }

    if (user.phone !== phone) {
      const userAlreadyExistsWithPhone = await User.exists({ phone });
      if (userAlreadyExistsWithPhone)
        return next(sendError(res, "Phone already exists!"));
    }

    await User.findByIdAndUpdate(userId, {
      $set: req.body,
      picturePath: req.file ? req.file.filename : user.picturePath,
    });

    return next(sendSuccess(res, "User updated successfully!"));
  } catch (error) {
    next(error);
  }
};
