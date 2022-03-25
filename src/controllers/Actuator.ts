import { NextFunction, Request, Response } from "express";
import { Actuator } from "./../models/actuator";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuators: typeof Actuator[] = await Actuator.find({});
      res.send({ actuators: actuators });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let actuator = await Actuator.findById({ _id: req.params.id });
      res.send({
        id: actuator?._id,
        type: actuator?.type,
        designation: actuator?.designation,
        state: actuator?.state,
      });
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let actuator = await Actuator.create(req.body);
      res.send({ message: "Actuator created.", id: actuator._id });
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let actuator = await Actuator.findByIdAndUpdate({
        _id: req.params.id,
        update: req.body,
      });
      res.send({
        message: "Actuator updated.",
        id: actuator?._id,
        type: actuator?.type,
        designation: actuator?.designation,
        state: actuator?.state,
      });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.deleteOne({ _id: req.params.id });
      res.json({ message: "Actuator deleted." });
      return;
    } catch (error) {
      next(error);
    }
  },
};
