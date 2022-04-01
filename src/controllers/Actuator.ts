import { formatResponse } from "@/methods/formatResponse";
import { NextFunction, Request, Response } from "express";
import { Actuator } from "./../models/actuator";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuators: typeof Actuator[] = await Actuator.find({});
      // res.send({ actuators: actuators });
      res.json(formatResponse("GET ALL", actuators));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findById({ _id: req.params.id });
      // res.send({
      //   id: actuator?._id,
      //   type: actuator?.type,
      //   designation: actuator?.designation,
      //   state: actuator?.state,
      // });
      res.json(formatResponse("GET BY ID", actuator));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let actuator = await Actuator.create(req.body);
      // res.send({ message: "Actuator created.", id: actuator._id });
      res.json(formatResponse("CREATED", actuator.id));
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let actuator = await Actuator.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      // res.send({
      //   message: "Actuator updated.",
      //   id: actuator?._id,
      //   type: actuator?.type,
      //   designation: actuator?.designation,
      //   state: actuator?.state,
      // });
      res.json(formatResponse("UPDATED", actuator?.id));
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.deleteOne({ _id: req.params.id });
      // res.json({ message: "Actuator deleted." });
      res.json(formatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
