import { formatResponse } from "@/methods/formatResponse";
import { NextFunction, Request, Response } from "express";
import { User } from "./../models/user";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: typeof User[] = await User.find({});
      // res.send({ users: users });
      res.json(formatResponse("GET ALL", users));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findById({ _id: req.params.id });
      // res.send({ id: user?._id, email: user?.email, username: user?.username });
      res.json(formatResponse("GET BY ID", user?.id ));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.create(req.body);
      // res.send({ message: "User created.", id: user._id });
      res.json(formatResponse("CREATED", user.id));
    } catch (error) {
      next(error);
    }
  },

  postLogin: async(req: Request, res: Response, next: NextFunction) => {
    try {
      
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      await user?.save;
      // res.send({
      //   message: "User updated.",
      //   id: user?._id,
      //   email: user?.email,
      //   username: user?.username,
      // });
      res.json(formatResponse("UPDATED", user?.id));
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      // res.json({ message: "User deleted." });
      res.json(formatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
