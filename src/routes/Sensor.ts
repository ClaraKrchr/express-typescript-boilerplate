import Sensor from "@/controllers/Sensor";
import express from "express";
const router = express.Router();

// Get all sensors
router.get("/", Sensor.getAll);

// Get sensor
router.get("/:id", Sensor.getById);

// Post sensor
router.post("/", Sensor.post);

// Patch sensor
router.patch("/:id", Sensor.patch);

// Delete sensor
router.delete("/:id", Sensor.delete);

export default router;