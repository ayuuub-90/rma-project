import express from "express";
import {
  createEvent,
  getAllEvents,
  getAllEventsComing,
  getEventById,
  getThreeEvents,
  getEventsFiltered,
} from "../controllers/eventController.js";
const router = express.Router();

router.route("/").post(createEvent).get(getAllEvents);
router.route("/coming-events").get(getAllEventsComing);
router.route("/replay-events").get(getThreeEvents);
router.route("/filtered-events").post(getEventsFiltered);
router.route("/:id").get(getEventById);

export default router;
