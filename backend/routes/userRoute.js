import express from "express";
const router = express.Router();
import { authenticate } from "../middlewares//auth_middleware.js";
import {
  // changePassword,
  createUser,
  getUserById,
  loginUser,
  logoutUser,
  updateUser,
  verifyEmail,
  verifiedUser,
} from "../controllers/userController.js";

router.route("/register-email").post(verifiedUser);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authenticate, logoutUser);
router
  .route("/profile")
  .get(authenticate, getUserById)
  .put(authenticate, updateUser);
// router.route("/profile/password-change").put(authenticate, changePassword);

router.route("/complete-registration/:token").get(verifyEmail);

export default router;
