import Actuator from "@/controllers/Actuator";
import { authentication } from "@/middlewares/authentication";
import express from "express";
const router = express.Router();
router.use(authentication);

// Get all actuators.
router.get("/", Actuator.getAll);

// Get actuator by id.
router.get("/:id", Actuator.getById);

// Post actuator.
router.post("/", Actuator.post);

// Patch actuator by id.
router.patch("/:id", Actuator.patch);

// Delete actuator by id.
router.delete("/:id", Actuator.delete);

export default router;