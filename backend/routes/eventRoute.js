import express from "express";
import {
  createEvent,
  getAllEvents,
  getAllEventsComing,
  getEventById,
  getThreeEvents,
  getEventsFiltered,
  deleteEvent,
  getUserEvents,
} from "../controllers/eventController.js";
import {
  authenticate,
} from "../middlewares/auth_middleware.js";
const router = express.Router();

router
  .route("/")
  .post(authenticate, createEvent)
  .get(getAllEvents)
  .delete(authenticate, deleteEvent);
router.route("/user-events").post(authenticate, getUserEvents);
router.route("/coming-events").get(getAllEventsComing);
router.route("/replay-events").get(getThreeEvents);
router.route("/filtered-events").post(getEventsFiltered);

//! should be the last ***** line
router.route("/:id").get(getEventById);

export default router;
