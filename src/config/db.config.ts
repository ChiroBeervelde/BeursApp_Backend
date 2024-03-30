import dotenv from "dotenv";

dotenv.config();

export default {
  HOST: "localhost",
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASSWORD,
  DB: "beurs_app"
};