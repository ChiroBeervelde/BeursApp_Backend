import express, { Application } from "express";
import Server from "./src/index";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;



app
  .listen(PORT, "localhost", function () {
    console.log(`🚀[server]: Server is running at http://localhost:${PORT}`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
