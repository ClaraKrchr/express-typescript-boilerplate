import { FormatResponse } from "@/methods/FormatResponse";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "./../models/user";
import "dotenv/config";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: typeof User[] = await User.find({});
      res.json(FormatResponse("GET ALL", users));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findById({ _id: req.params.id });
      res.json(FormatResponse("GET BY ID", user?.id));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.create({ email: req.body.email, username: req.body.username, password: await argon2.hash(req.body.password) })
      res.json(FormatResponse("CREATED", user.id));
    } catch (error) {
      next(error);
    }
  },

  postLogin: async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email });
    try {
      if (!(await argon2.verify(user!.password, req.body.password))) {
        throw new Error("Failed");
      }
      let token = process.env.SECRETKEY;
      let output = { token: jwt.sign({ email: user?.email, username: user?.username, _id: user?.id }, token!) };
      res.json({ message: output });
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findByIdAndUpdate(req.params.id, req.body);
      await user?.save;
      res.json(FormatResponse("UPDATED", user?.id));
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      // res.json({ message: "User deleted." });
      res.json(FormatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
