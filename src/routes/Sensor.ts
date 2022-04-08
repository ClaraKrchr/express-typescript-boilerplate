import Sensor from "@/controllers/Sensor";
import { authentication } from "@/middlewares/authentication";
import express from "express";
const router = express.Router();

router.use(authentication);
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