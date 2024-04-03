import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserInfo } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserInfo);

export default router;
