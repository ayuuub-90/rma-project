import express from "express";
import {
  createPOIs,
  getAllPOIs,
} from "../controllers/personOfInterestController.js";
const router = express.Router();

router.route("/").post(createPOIs).get(getAllPOIs);

export default router;
