import express from "express";
import {
  commentPost,
  createPost,
  deleteComment,
  deletePost,
  getAllPosts,
  getPost,
  likePost,
  updatePost,
} from "../controllers/post.js";
import { createUploadDir, upload } from "../helpers.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// @route POST api/posts
// @desc Create a new post
// @access Private
router.post(
  "/",
  verifyToken,
  createUploadDir,
  upload.single("picture"),
  createPost
);

// @route GET api/posts
// @desc Get all posts
// @access Private
router.get("/", verifyToken, getAllPosts);

// @route GET api/posts/:id
// @desc Get a post
// @access Private
router.get("/:id", verifyToken, getPost);

// @route PUT api/posts/:id
// @desc Update a post
// @access Private
router.put(
  "/:id",
  verifyToken,
  createUploadDir,
  upload.single("picture"),
  updatePost
);

// @route DELETE api/posts/:id
// @desc Delete a post
// @access Private
router.delete("/:id", verifyToken, deletePost);

// @route PUT api/posts/:id/like
// @desc Like a post
// @access Private
router.put("/:id/like", verifyToken, likePost);

// @route POST api/posts/:id/comment
// @desc Comment on a post
// @access Private
router.post("/:id/comment", verifyToken, commentPost);

// @route DELETE api/posts/:id/comment/:commentId
// @desc Delete a comment
// @access Private
router.delete("/:id/comment/:commentId", verifyToken, deleteComment);

export default router;
