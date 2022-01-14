import { Router } from "express";

const userController = require("../controllers/userController");
const router = Router();

router.get("/users", userController.getAllUser);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id" , userController.updateUser)
router.delete("/users/:id", userController.deleteUser);

export default router;
