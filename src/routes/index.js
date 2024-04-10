import express from "express";
import authRoutes from "./auth";

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

export default router;
