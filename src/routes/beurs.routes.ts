import { Router } from "express";
import BeursController from "../controllers/beurs.controller";

class BeursRoutes {
  router = Router();
  controller = new BeursController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/start", this.controller.startBeurs);
    this.router.get("/stop", this.controller.stopBeurs);

  }
}

export default new BeursRoutes().router;