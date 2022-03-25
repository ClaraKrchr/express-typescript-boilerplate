import Index from "@/controllers/Index";
import User from "@/controllers/User";
import Actuator from "@/controllers/Actuator";
import Sensor from "@/controllers/Sensor";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", Index.get);

// ---- USERS ---- //
// // Get all users
// router.get("/user", User.getAll);

// // Get user
// router.get("/user/:id", User.getById);

// Post user
router.post("/user", User.post);

// // Patch user
// router.patch("/user/:id", User.patch);

// Delete user
router.delete("/user/:id", User.delete);

// ---- ACTUATORS ---- //
// // Get all actuators
// router.get("/actuator", Actuator.getAll);

// // Get actuator
// router.get("/actuator/:id", Actuator.getById);

// Post actuator
router.post("/actuator", Actuator.post);

// // Patch actuator
// router.patch("/actuator/:id", Actuator.patch);

// Delete actuator
router.delete("/actuator/:id", Actuator.delete);

// ---- SENSORS ---- //
// // Get all sensors
// router.get("/sensor", Sensor.getAll);

// // Get sensor
// router.get("/sensor/:id", Sensor.getById);

// Post sensor
router.post("/sensor", Sensor.post);

// // Patch sensor
// router.patch("/sensor/:id", Sensor.patch);

// Delete sensor
router.delete("/sensor/:id", Sensor.delete);

export default router;
