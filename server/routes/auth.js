import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import { createUploadDir, upload } from "../helpers.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", createUploadDir, upload.single("picture"), register);

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", login);

// @route POST api/auth/logout
// @desc Logout user
// @access Public
router.post("/logout", logout);
export default router;
