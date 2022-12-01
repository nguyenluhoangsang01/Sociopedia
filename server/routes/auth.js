import express from "express";
import { register } from "../controllers/auth.js";
import { createUploadDir, upload } from "../helpers.js";

const router = express.Router();

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", createUploadDir, upload.single("picture"), register);

export default router;
