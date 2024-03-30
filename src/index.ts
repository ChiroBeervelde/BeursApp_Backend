import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";


export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
        origin: ["http://localhost:3000", "http://20.224.18.56:3000", "http://172.0.0.1:3000", "http://0.0.0.0:3000", "http://localhost:80", "http://20.224.18.56:80", "http://172.0.0.1:80", "http://0.0.0.0:80" ]
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
