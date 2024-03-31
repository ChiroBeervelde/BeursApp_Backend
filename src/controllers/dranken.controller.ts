import { Request, Response } from "express";
import drankenService from "../service/dranken.service";

export default class DrankenController {

    async findAll(req: Request, res: Response) {
        try {
          console.log("findAllDranken");
            const dranken = await drankenService.findAllDranken();
            res.status(200).send(dranken);
          } catch (err) {
            res.status(500).send({
              message: "Some error occurred while retrieving dranken."
            });
          }
    }
}