import { Request, Response } from "express";
import bestellingService from "../service/bestelling.service";
import Bestelling from "../models/bestelling.model";

export default class BestellingController {
  async create(req: Request, res: Response) {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    try {
      const bestelling: Bestelling = req.body;
      await bestellingService.createBestelling(bestelling);

      res.status(201).json({
        message: "create OK",
        reqBody: req.body
      });
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred creating bestelling."
      });
    }
  }
}