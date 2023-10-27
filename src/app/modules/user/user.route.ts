import express from "express";
import { createUser } from "./user.controller";

const router = express.Router();

router.get("/");
router.post("/signup-user", createUser);
router.get("/:id");

export default router;
