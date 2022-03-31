import { Router } from "express";

// req controller
const commentController = require("../controllers/commentController");
const router = Router();

router.get("/comment", commentController.getAllComment);
router.get("/comment/event/:eventid", commentController.getCommentByEventId)
router.get("/comment/:id", commentController.getCommentById);
router.post("/comment/event/:eventid/user/:userid", commentController.createComment);
router.put("/comment/:id", commentController.updateComment);
router.delete("/comment/:id", commentController.deleteComment);

export default router;