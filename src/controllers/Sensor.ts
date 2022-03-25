import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";

export default {
//   getAll: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const sensors: Sensor[] = [];

//       res.json({ sensors });
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },

//   getById: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const sensor: Sensor;
//       res.json({ sensor });
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.create(req.body);
      res.send({ message: "Sensor created.", id: sensor._id });
    } catch (error) {
      next(error);
    }
  },

//   patch: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       res.json("Sensor updated.");
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },

//   delete: async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         //await Sensor.deleteOne(req.params.id);
//       // const id: number = req.params.id;
//       res.json({ message: "Sensor deleted." });
//       return;
//     } catch (error) {
//       next(error);
//     }
//   },
};
