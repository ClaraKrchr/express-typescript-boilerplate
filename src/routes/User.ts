import User from "@/controllers/User";
import { authentication } from "@/middlewares/authentication";
import express from "express";
const router = express.Router();

// Post user
router.post("/", User.post);

// Post login
router.post("/login", User.postLogin);

//Auth
//router.use(authentication);

// Get all users
router.get("/", User.getAll);

// Get user
router.get("/:id", User.getById);

// Patch user
router.patch("/:id", User.patch);

// Delete user
router.delete("/:id", User.delete);

export default router;