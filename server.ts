import express, { Application } from "express";
import Server from "./src/index";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = 9000;



app
  .listen(PORT, "0.0.0.0", function () {
    console.log(`🚀[server]: Server is running at port: 9000`);
    console.log(`👂[server]: Server is listening`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
