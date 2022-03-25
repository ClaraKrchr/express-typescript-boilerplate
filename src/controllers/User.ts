import { NextFunction, Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: User[] = [];

      res.json({ users });
      return;
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: User;
      res.json({ user });
      return;
    } catch (error) {
      next(error);
    }
  },

  post: async (user: User, res: Response, next: NextFunction) => {
    try {
      const userToCreate: User = user;
      res.json({ userToCreate });
      return;
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json("User updated.");
      return;
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const id: number = req.params.id;
      res.json({ message: "User deleted." });
      return;
    } catch (error) {
      next(error);
    }
  },
};
