import { formatResponse } from "@/methods/formatResponse";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "./../models/user";
import "dotenv/config";

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
      res.json(formatResponse("GET BY ID", user?.id));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.create(req.body);
      user.password = await argon2.hash(user.password);
      user.save();
      // res.send({ message: "User created.", id: user._id });
      res.json(formatResponse("CREATED", user.id));
    } catch (error) {
      next(error);
    }
  },

  postLogin: async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({email: req.body.email});
    try {
      await argon2.verify(user!.password, req.body.password);
      let token = process.env.SECRETKEY;
      let output = {token:jwt.sign({email: user?.email, username: user?.username, _id: user?.id}, token!)};
      res.json({message: output});
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findByIdAndUpdate(req.params.id, req.body);
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
