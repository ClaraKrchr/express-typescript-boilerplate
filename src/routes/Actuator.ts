import Actuator from "@/controllers/Actuator";
import express from "express";
const router = express.Router();

// Get all actuators
router.get("/", Actuator.getAll);

// Get actuator
router.get("/:id", Actuator.getById);

// Post actuator
router.post("/", Actuator.post);

// Patch actuator
router.patch("/:id", Actuator.patch);

// Delete actuator
router.delete("/:id", Actuator.delete);

export default router;