import { sendError, sendSuccess } from "../helpers.js";
import User from "../models/User.js";

export const getUserFriends = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId).select("friends");
    if (!user) return next(sendError(res, "User not found", 404));

    return next(sendSuccess(res, "User's friends", user));
  } catch (error) {
    next(error);
  }
};

export const addFriend = async (req, res, next) => {
  res.send("Add friend");
};

export const removeFriend = async (req, res, next) => {
  res.send("Remove friend");
};
