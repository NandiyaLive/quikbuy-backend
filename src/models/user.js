import { Schema, model } from "mongoose";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.USER,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const User = model("User", UserSchema);

UserSchema.index({ createdAt: 1 });

User.syncIndexes();

export default User;
