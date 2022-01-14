import { Router } from "express";

// req controller
const eventController = require("../controllers/eventController");
const router = Router();

router.get("/event", eventController.getAllEvent);
// router.get("/event/search/:title", eventController.searchEvent);
router.get("/event/search", eventController.searchEvent);

router.get("/event/:id", eventController.getEventById);
router.post("/event/:userid", eventController.createEvent);
router.put("/event/:eventid", eventController.updateEvent);
router.delete("/event/:eventid", eventController.deleteEvent);

export default router;
