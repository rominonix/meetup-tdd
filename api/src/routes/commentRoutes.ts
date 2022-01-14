import { Router } from "express";

// req controller
const commentController = require("../controllers/commentController");
const router = Router();

router.get("/comment", commentController.getAllComment);
router.get("/comment/:id", commentController.getCommentById);
router.post("/comment/:eventid", commentController.createComment);
router.put("/comment/:id", commentController.updateComment);
router.delete("/comment/:id", commentController.deleteComment);

export default router;