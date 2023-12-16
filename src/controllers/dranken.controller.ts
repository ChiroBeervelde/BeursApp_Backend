import { Request, Response } from "express";
import Drank from "../models/drank.model";
import DrankRepository from "../repositories/dranken.repositorie";
import drankenRepositorie from "../repositories/dranken.repositorie";

export default class DrankenController {
    async findAll(req: Request, res: Response) {
        try {
            const dranken = await drankenRepositorie.retrieveAll();
      
            res.status(200).send(dranken);
          } catch (err) {
            res.status(500).send({
              message: "Some error occurred while retrieving dranken."
            });
          }
    }
}