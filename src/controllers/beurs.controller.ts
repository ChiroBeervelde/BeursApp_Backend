import { Request, Response } from "express";
import beursService from "../service/beurs.service";

export default class BeursController {

    async startBeurs(req: Request, res: Response) {
        try {
            console.log("startBeurs");
            await beursService.start_beurs();
    
            res.status(200).json({
                message: "Beurs started"
            });
          } catch (err) {
            res.status(500).send({
              message: "Some error occurred while starting the beurs."
            });
          }
    }

    async stopBeurs(req: Request, res: Response) {
        try {
            console.log("stopBeurs");
            await beursService.stop_beurs();
      
            res.status(200).json({
                message: "Beurs stopped"
            });          
        } catch (err) {
            res.status(500).send({
              message: "Some error occurred while stopping the beurs."
            });
          }
    }
}