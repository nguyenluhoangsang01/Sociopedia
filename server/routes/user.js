import express from "express";
import {
  addFriend,
  getUserFriends,
  removeFriend,
} from "../controllers/user.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// @route GET api/users/friends
// @desc Get user's friends
// @access Private
router.get("/friends", verifyToken, getUserFriends);

// @route PUT api/users/:id/friendId
// @desc Add friend
// @access Private
router.put("/:id/:friendId", verifyToken, addFriend);

// @route DELETE api/users/:id/friendId
// @desc Remove friend
// @access Private
router.delete("/:id/:friendId", verifyToken, removeFriend);

export default router;
