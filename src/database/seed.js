import { SALT_ROUNDS } from "@/utils/config";
import { genSaltSync, hashSync } from "bcrypt";

const { default: User } = require("@/models/user");

const seedDB = async () => {
  const adminAcc = await User.findOne({ username: "admin" });

  const salt = genSaltSync(SALT_ROUNDS);
  const hash = hashSync("supersecret", salt);

  if (!adminAcc) {
    try {
      await User.create({
        username: "admin",
        email: "admin@quikbuy.com",
        password: hash,
        role: "admin",
      });

      console.log("Admin account created successfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Admin account already exists");
  }
};

export default seedDB;
