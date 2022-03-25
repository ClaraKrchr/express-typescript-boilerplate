import { NextFunction, Request, Response } from "express";
import { User } from "./../models/user";

export default {
    getAll: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const users: typeof User[] = await User.find({});
        res.send({users: users});
      } catch (error) {
        next(error);
      }
    },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findById({ _id: req.params.id });
      res.send({ id: user?._id, email: user?.email });
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.create(req.body);
      res.send({ message: "User created.", id: user._id });
    } catch (error) {
      next(error);
    }
  },

  //   patch: async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       res.json("User updated.");
  //       return;
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.json({ message: "User deleted." });
      return;
    } catch (error) {
      next(error);
    }
  },
};
