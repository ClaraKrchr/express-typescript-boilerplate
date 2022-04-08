import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";
import { FormatResponse } from "./../methods/FormatResponse";
import { format } from "path";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors: typeof Sensor[] = await Sensor.find({});
      res.json(FormatResponse("GET ALL",sensors));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findById({ _id: req.params.id });
      res.json(FormatResponse("GET BY ID", sensor));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    let type = null;
    try {
      switch (req.body.type) {
        case "TEMPERATURE" : type = 0;
        case "HUMIDITY" : type = 1;
        case "BARO" : type = 2;
        case "PROXIMITY" : type = 3;
        break;
      }
      let sensor = await Sensor.create({type: type, designation: req.body.designation, rawValue: req.body.rawValue});
      res.json(FormatResponse("CREATED", sensor.id));
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(FormatResponse("UPDATED", sensor?.id))
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.deleteOne({ _id: req.params.id });
      res.json(FormatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
