import { NextFunction, Request, Response } from "express";

export default {
  // get default
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "salut val" });
      return;
    } catch (error) {
      next(error);
    }
  },
};
