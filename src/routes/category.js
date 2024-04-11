import { categoryController } from "@/controllers/category";
import { adminProtect } from "@/middlewares/auth";
import express from "express";

const category = express.Router();

category.get("/", categoryController.getAllCategories);

category.get("/:id", categoryController.getCategoryById);

category.post("/", adminProtect, categoryController.createCategory);

category.put("/:id", adminProtect, categoryController.updateCategory);

category.delete("/:id", adminProtect, categoryController.deleteCategory);

export default category;
