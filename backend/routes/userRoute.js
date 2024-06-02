import express from "express";
const router = express.Router();
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares//auth_middleware.js";
import {
  createUser,
  getUserById,
  loginUser,
  logoutUser,
  updateUser,
  verifyEmail,
  changePassword,
  getAllUsers,
  createPersonOfInterest,
  verifiedUserSignUp,
  verifiedUserResetPassword,
  getAllRequests,
  acceptRequest,
  declineRequest,
  deleteUser,
  getAllPersonOfInterest,
} from "../controllers/userController.js";

router
  .route("/")
  .get(authenticate, authorizeAdmin, getAllUsers)
  .delete(authenticate, authorizeAdmin, deleteUser);
router.route("/register-email").post(verifiedUserSignUp);
router.route("/register-email/reset-password").post(verifiedUserResetPassword);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authenticate, logoutUser);
router
  .route("/profile")
  .get(authenticate, getUserById)
  .put(authenticate, updateUser);

router
  .route("/person-of-interest")
  .put(authenticate, createPersonOfInterest)
  .get(authenticate, getAllPersonOfInterest);

router.route("/requests").get(authenticate, authorizeAdmin, getAllRequests);
router
  .route("/requests/accepter-request")
  .post(authenticate, authorizeAdmin, acceptRequest);
router
  .route("/requests/decliner-request")
  .post(authenticate, authorizeAdmin, declineRequest);

//! must be in the bottom of the ligne !!!!!
router.route("/complete-registration/:token").get(verifyEmail);
router.route("/forgot-password/:token").put(changePassword);

export default router;
