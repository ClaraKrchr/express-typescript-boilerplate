import { NextFunction, Request, Response } from "express";
import { Actuator } from "./../models/actuator";

export default {
//   getAll: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const actuators: Actuator[] = [];

//       res.json({ actuators });
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },

//   getById: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const actuator: Actuator;
//       res.json({ actuator });
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let actuator = await Actuator.create(req.body);
      res.send({ message: "Actuator created.", id: actuator._id });
    } catch (error) {
      next(error);
    }
  },

//   patch: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       res.json("Actuator updated.");
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },

//   delete: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       // const id: number = req.params.id;
//       res.json({ message: "Actuator deleted." });
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },
};
