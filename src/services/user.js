import User from "@/models/user";

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const updateUser = async (id, payload) => {
  return await User.findByIdAndUpdate(id, payload, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export const userService = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
