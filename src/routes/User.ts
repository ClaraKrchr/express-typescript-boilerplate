import User from "@/controllers/User";
import express from "express";
const router = express.Router();

// Get all users.
router.get("/", User.getAll);

// Get user by id.
router.get("/:id", User.getById);

// Post user.
router.post("/", User.post);

// Post login.
router.post("/login", User.postLogin);

// Patch user by id.
router.patch("/:id", User.patch);

// Delete user by id.
router.delete("/:id", User.delete);

export default router;