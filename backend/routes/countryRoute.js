import express from "express";
import {
  createCountry,
  getAllCountries,
} from "../controllers/countryController.js";
const router = express.Router();

router.route("/").get(getAllCountries).post(createCountry);

export default router;
