import Category from "@/models/category";

const createCategory = async (category) => {
  return await Category.create(category);
};

const getAllCategories = async () => {
  return await Category.find();
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const getCategoryBySlug = async (slug) => {
  return await Category.findOne({ slug });
};

const updateCategory = async (id, category) => {
  return await Category.findByIdAndUpdate(id, category, {
    new: true,
  });
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export const categoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  getCategoryBySlug,
  updateCategory,
  deleteCategory,
};
