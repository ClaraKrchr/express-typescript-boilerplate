import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors: typeof Sensor[] = await Sensor.find({});
      res.send({ sensors: sensors });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.findById({ _id: req.params.id });
      res.send({
        id: sensor?._id,
        type: sensor?.type,
        designation: sensor?.designation,
        rawValue: sensor?.rawValue,
      });
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.create(req.body);
      res.send({ message: "Sensor created.", id: sensor._id });
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.findByIdAndUpdate({
        _id: req.params.id,
        update: req.body,
      });
      res.send({
        message: "Sensor updated.",
        id: sensor?._id,
        type: sensor?.type,
        designation: sensor?.designation,
        rawValue: sensor?.rawValue,
      });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.deleteOne({ _id: req.params.id });
      res.json({ message: "Sensor deleted." });
      return;
    } catch (error) {
      next(error);
    }
  },
};
