import { configDotenv } from "dotenv";

configDotenv();

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 12;