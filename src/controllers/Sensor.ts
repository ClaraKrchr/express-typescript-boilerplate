import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";
import { FormatResponse } from "./../methods/FormatResponse";
import { format } from "path";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors: typeof Sensor[] = await Sensor.find({});
      sensors.forEach(sensor => {
        if(sensor.type == "TEMPERATURE"){
          
        }
      });
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
    try {
      let sensor = await Sensor.create(req.body);
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
