import User from "@/models/user";
import { authService } from "@/services/auth";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const payload = req.body;

  let user = await User.findOne({ email: payload.email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    user = await User.create(payload);
    delete user.password;

    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const payload = req.body;

  try {
    const user = await authService.login(payload);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = bcrypt.compareSync(payload.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = await authService.generateToken(user);

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const authController = {
  register,
  login,
};
