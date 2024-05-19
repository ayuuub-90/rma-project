import express from "express";
import { authenticate } from "../middlewares/auth_middleware.js";
import {
  createContact,
  getAllContacts,
} from "../controllers/contactController.js";
const router = express.Router();

router.route("/").post(createContact)
// TODO (¬‿¬)  .get(authenticate, authorizeAdmin, getAllContacts);

export default router;
