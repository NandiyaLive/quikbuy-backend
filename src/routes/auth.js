import { authController } from "@/controllers/auth";
import validateData from "@/middlewares/validate";
import { authValidations } from "@/validations/auth";
import express from "express";

const auth = express.Router();

auth.post(
  "/register",
  validateData(authValidations.registrationSchema),
  authController.register
);

auth.post(
  "/login",
  validateData(authValidations.loginSchema),
  authController.login
);

export default auth;
