import { NextFunction, Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuators: Actuator[] = [];

      res.json({ actuators });
      return;
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator: Actuator;
      res.json({ actuator });
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (actuator: Actuator, res: Response, next: NextFunction) => {
    try {
      const actuatorToCreate: Actuator = actuator;
      res.json({ actuatorToCreate });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json("Actuator updated.");
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const id: number = req.params.id;
      res.json({ message: "Actuator deleted." });
      return;
    } catch (error) {
      next(error);
    }
  },
};
