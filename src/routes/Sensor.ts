import Sensor from "@/controllers/Sensor";
import { authentication } from "@/middlewares/authentication";
import express from "express";
const router = express.Router();
router.use(authentication);

// Get all sensors.
router.get("/", Sensor.getAll);

// Get sensor by id.
router.get("/:id", Sensor.getById);

// Post sensor.
router.post("/", Sensor.post);

// Patch sensor by id.
router.patch("/:id", Sensor.patch);

// Delete sensor by id.
router.delete("/:id", Sensor.delete);

export default router;