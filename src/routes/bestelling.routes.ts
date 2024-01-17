import { Router } from "express";
import BestellingController from "../controllers/bestelling.controller";

class BestellingRoutes {
  router = Router();
  controller = new BestellingController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/", this.controller.create);
  }
}

export default new BestellingRoutes().router;
