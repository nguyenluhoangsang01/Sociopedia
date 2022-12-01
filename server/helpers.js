import { mkdir } from "fs";
import multer from "multer";

// Constants
const UPLOAD_PATH = "public/uploads";

// Format date function
export const formatDate = (date) => {
  const subDate = date.split("T")[0];
  return subDate;
};

// Create a folder to store the images
export const createUploadDir = (req, res, next) => {
  const date = new Date();
  const dirName = date.toISOString();

  mkdir(
    `${UPLOAD_PATH}/${formatDate(dirName)}`,
    { recursive: true },
    (error) => {
      if (error) return sendError(res, "Can not upload file", 500);
    }
  );

  req.dirName = formatDate(dirName);
  next();
};

// Uploads a single file
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${UPLOAD_PATH}/${req.dirName}`);
  },
  filename: (req, file, callback) => {
    callback(
      null,
      formatDate(new Date().toISOString()) + "@" + file.originalname
    );
  },
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter,
});

// Send error function
export const sendError = (res, message, statusCode = 400) =>
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });

// Send success function
export const sendSuccess = (res, message, data = null, statusCode = 200) => {
  let resJson = {
    success: true,
    statusCode,
    message,
  };

  if (data) resJson.data = data;

  return res.status(statusCode).json(resJson);
};
