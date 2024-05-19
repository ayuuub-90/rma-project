import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt_token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.USER_ID);
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Not authenticated, please login" });
  }
});

export { authenticate };
