import jwt from "jsonwebtoken";
import { sendError } from "../helpers.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) return next(sendError(res, "Access denied", 401));

    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      function (error, decoded) {
        if (error) return next(sendError(res, "Invalid token", 498));

        req.userId = decoded.id;
        next();
      }
    );
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
