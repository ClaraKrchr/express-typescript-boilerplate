import { NextFunction, Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors: Sensor[] = [];

      res.json({ sensors });
      return;
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor: Sensor;
      res.json({ sensor });
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (sensor: Sensor, res: Response, next: NextFunction) => {
    try {
      const sensorToCreate: Sensor = sensor;
      res.json({ sensorToCreate });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json("Sensor updated.");
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const id: number = req.params.id;
      res.json({ message: "Sensor deleted." });
      return;
    } catch (error) {
      next(error);
    }
  },
};
