import { sendError, sendSuccess } from "../helpers.js";
import Post from "../models/Post.js";

export const createPost = async (req, res, next) => {
  try {
    const { userId } = req;
    const { content } = req.body;

    if (!content) return next(sendError(res, "Content is required"));

    const newPost = await Post.create({
      ...req.body,
      user: userId,
      picturePath: req.file ? req.file.filename : null,
    });
    await newPost.save();

    const posts = await Post.find()
      .select("-__v")
      .populate(
        "user",
        "_id firstName lastName picturePath occupation location"
      );

    return next(sendSuccess(res, "Post created successfully", posts, 201));
  } catch (error) {
    next(error);
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .select("-__v")
      .populate(
        "user",
        "_id firstName lastName picturePath occupation location"
      );

    return next(sendSuccess(res, "Get all post successfully", posts));
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id)
      .select("-__v")
      .populate(
        "user",
        "_id firstName lastName picturePath occupation location"
      );
    if (!post) return next(sendError(res, "Post not found", 404));

    return next(sendSuccess(res, "Get post successfully", post));
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) return next(sendError(res, "Content is required"));

    const post = await Post.findById(id);
    if (!post) return next(sendError(res, "Post not found", 404));

    await Post.findByIdAndUpdate(
      id,
      { ...req.body, picturePath: req.file ? req.file.filename : null },
      { new: true }
    );

    const posts = await Post.find();

    return next(sendSuccess(res, "Post updated successfully", posts));
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) return sendError(res, "Post not found", 404);
    await post.remove();

    return next(sendError(res, "Post deleted successfully"));
  } catch (error) {
    next(error);
  }
};

export const likePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;

    const post = await Post.findById(id);
    if (!post) return next(sendError(res, "Post not found", 404));

    const isLiked = post.likes.find(
      (like) => like.user.toString() === userId.toString()
    );
    if (isLiked) {
      post.likes = post.likes.filter(
        (like) => like.user.toString() !== userId.toString()
      );
      await post.save();

      sendSuccess(res, "Post un liked successfully", post.likes.length);
    } else {
      post.likes.unshift({ user: userId });
      await post.save();

      sendSuccess(res, "Post liked successfully", post.likes.length);
    }
    await post.save();
  } catch (error) {
    next(error);
  }
};

export const commentPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;

    const { message } = req.body;
    if (!message) return next(sendError(res, "Message is required"));

    const post = await Post.findById(id);
    if (!post) return next(sendError(res, "Post not found", 404));

    post.comments.unshift({
      id: (post.comments.length + 1) * Math.floor(Math.random() * 10000),
      message,
      user: userId,
    });
    await post.save();

    return next(sendSuccess(res, "Post commented successfully", post.comments));
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;

    const post = await Post.findById(id);
    if (!post) return next(sendError(res, "Post not found", 404));

    const comment = post.comments.find(
      (comment) => comment.id.toString() === commentId.toString()
    );
    if (!comment) return next(sendError(res, "Comment not found", 404));

    post.comments = post.comments.filter(
      (comment) => comment.id?.toString() !== commentId?.toString()
    );
    await post.save();

    return next(sendSuccess(res, "Comment deleted successfully"));
  } catch (error) {
    next(error);
  }
};
