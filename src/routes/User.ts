import User from "@/controllers/User";
import express from "express";
const router = express.Router();

// Get all users
router.get("/", User.getAll);

// Get user
router.get("/:id", User.getById);

// Post user
router.post("/", User.post);

// Patch user
router.patch("/:id", User.patch);

// Delete user
router.delete("/:id", User.delete);

export default router;