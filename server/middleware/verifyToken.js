import jwt from "jsonwebtoken";
import { sendError } from "../helpers.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) return next(sendError(res, "You are not authenticated.", 401));

    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      function (error, decoded) {
        if (error) return next(sendError(res, error.message));

        req.userId = decoded.id;
        next();
      }
    );

    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
