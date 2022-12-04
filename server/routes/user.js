import express from "express";
import {
  addFriend,
  getUserFriends,
  removeFriend,
} from "../controllers/user.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// @route POST api/users/friendId
// @desc Add friend
// @access Private
router.post("/:friendId", verifyToken, addFriend);

// @route DELETE api/users/friendId
// @desc Remove friend
// @access Private
router.delete("/:friendId", verifyToken, removeFriend);

// @route GET api/users/friends
// @desc Get user's friends
// @access Private
router.get("/friends", verifyToken, getUserFriends);

export default router;
