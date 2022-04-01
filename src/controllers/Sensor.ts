import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";
import { formatResponse } from "./../methods/formatResponse";
import { format } from "path";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors: typeof Sensor[] = await Sensor.find({});
      //res.send({ sensors: sensors });
      res.json(formatResponse("GET ALL",sensors));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const sensor = await Sensor.findById({ _id: req.params.id });
      const sensor = await Sensor.findOne({_id: req.params.id});
      /* res.send({
        id: sensor?._id,
        type: sensor?.type,
        designation: sensor?.designation,
        rawValue: sensor?.rawValue,
      }); */
      res.json(formatResponse("GET BY ID", sensor));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.create(req.body);
      // res.send({ message: "Sensor created.", id: sensor._id });
      res.json(formatResponse("CREATED", sensor.id));
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
      // res.send({
      //   message: "Sensor updated.",
      //   id: sensor?._id,
      //   type: sensor?.type,
      //   designation: sensor?.designation,
      //   rawValue: sensor?.rawValue,
      // });
      res.json(formatResponse("SensorUpdated"))
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
