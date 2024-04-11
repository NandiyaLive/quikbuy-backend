import { authenticate } from "@/middlewares/auth";
import express from "express";
import authRoutes from "./auth";
import categoryRoutes from "./category";
import userRoutes from "./user";

const router = express.Router();

router.get("/", (req, res) => {
  const uptime = Math.round(process.uptime()) + "s";

  res.json({
    message: "Welcome to QuikBuy API",
    version: "1.0.0",
    status: "UP",
    uptime,
  });
});

router.use("/auth", authRoutes);
router.use("/user", authenticate, userRoutes);
router.use("/category", authenticate, categoryRoutes);

export default router;
