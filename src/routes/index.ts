import { Application } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";
import drankenRoutes from "./dranken.routes";
import beursRoutes from "./beurs.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/api/dranken", drankenRoutes);
    app.use("/api/beurs", beursRoutes);
    // app.use("/api/beurssettings", );
    // app.use("/api/bestellingen", );
  }
}