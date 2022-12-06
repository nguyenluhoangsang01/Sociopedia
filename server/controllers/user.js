import { sendError, sendSuccess } from "../helpers.js";
import User from "../models/User.js";

export const addFriend = async (req, res, next) => {
  try {
    const { userId } = req;
    const { friendId } = req.params;

    if (userId === friendId)
      return next(sendError(res, "You can't add yourself as a friend"));

    const user = await User.findById(userId);

    const friend = await User.findById(friendId);
    if (!friend) return next(sendError(res, "User not found", 404));

    if (user.friends.includes(friend._id))
      return next(sendError(res, "Friend already added"));

    user.friends.push(friend._id);
    await user.save();

    return next(sendSuccess(res, "Friend added successfully"));
  } catch (error) {
    next(error);
  }
};

export const removeFriend = async (req, res, next) => {
  try {
    const { userId } = req;
    const { friendId } = req.params;

    const user = await User.findById(userId);

    const friend = await User.findById(friendId);
    if (!friend) return next(sendError(res, "User not found", 404));

    if (!user.friends.includes(friend._id))
      return next(sendError(res, "Friend not found"));

    user.friends = user.friends.filter(
      (friend) => friend.toString() !== friendId.toString()
    );
    await user.save();

    return next(sendSuccess(res, "Friend removed successfully"));
  } catch (error) {
    next(error);
  }
};

export const getUserFriends = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId).select("friends");

    const friends = await User.find({ _id: { $in: user.friends } }).select(
      "_id firstName lastName picturePath occupation location"
    );
    user.friends = friends;

    return next(sendSuccess(res, "User's friends", user));
  } catch (error) {
    next(error);
  }
};
