import { Request, Response } from "express";
import drankenService from "../service/dranken.service";

export default class DrankenController {

    async findAll(req: Request, res: Response) {
        try {
            const dranken = await drankenService.findAllDranken();
            res.status(200).send(dranken);
          } catch (err) {
            console.log(err);
            res.status(500).send({
              message: "Some error occurred while retrieving dranken."
            });
          }
    }
}