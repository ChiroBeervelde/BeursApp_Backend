import { Router } from "express";
import DrankenController from "../controllers/dranken.controller";

class DrankenRoutes {
  router = Router();
  controller = new DrankenController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", this.controller.findAll);
  }
}

export default new DrankenRoutes().router;