import { Router } from "express";

const userController = require("../controllers/userController");
const router = Router();

router.get("/users", userController.getAllUser);
router.get("/users/:email", userController.getUserByEmail);
router.get("/users/id/:id", userController.getUserById)
router.post("/users/login", userController.loginUser)
router.post("/users", userController.createUser);
router.put("/users/:id" , userController.updateUser)
router.put("/attend/event" , userController.updateEventAttend)
router.put("/notattend/event" , userController.updateNotEventAttend)
router.delete("/users/:id", userController.deleteUser);

export default router;
