import Index from "@/controllers/Index";
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", Index.get);

// ---- USERS ---- //
// Get all users
router.get("/user", Index.getAllUsers);

// Get user
router.get("/user/:id", Index.getUserById);

// Post user
router.post("/user", Index.postUser);

// Patch user
router.patch("/user/:id", Index.patchUser);

// Delete user
router.delete("/user/:id", Index.deleteUser);


// ---- ACTUATORS ---- //
// Get all actuators
router.get("/actuator", Index.getAllActuators);

// Get actuator
router.get("/actuator/:id", Index.getActuatorById);

// Post actuator
router.post("/actuator", Index.postActuator);

// Patch actuator
router.patch("/actuator/:id", Index.patchActuator);

// Delete actuator
router.delete("/actuator/:id", Index.deleteActuator);


// ---- SENSORS ---- //
// Get all sensors
router.get("/sensor", Index.getAllSensors);

// Get sensor
router.get("/sensor/:id", Index.getSensorById);

// Post sensor
router.post("/sensor", Index.postSensor);

// Patch sensor
router.patch("/sensor/:id", Index.patchSensor);

// Delete sensor
router.delete("/sensor/:id", Index.deleteSensor);


export default router;
