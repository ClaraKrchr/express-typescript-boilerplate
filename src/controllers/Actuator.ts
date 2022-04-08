import { FormatResponse } from "./../methods/FormatResponse";
import { NextFunction, Request, Response } from "express";
import { Actuator } from "./../models/actuator";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuators: typeof Actuator[] = await Actuator.find({});
      res.json(FormatResponse("GET ALL", actuators));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findById({ _id: req.params.id });
      res.json(FormatResponse("GET BY ID", actuator));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    let typeId = null;
    try {
      if(req.body.type === "LIGHT"){
        typeId = 1;
      } else if (req.body.type === "BLINDS"){
        typeId = 0;
      }
      let actuator = await Actuator.create({type: typeId, designation: req.body.designation, state: req.body.state});
      res.json(FormatResponse("CREATED", actuator.id));
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
      res.json(FormatResponse("UPDATED", actuator?.id));
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.deleteOne({ _id: req.params.id });
      res.json(FormatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
