import { FormatResponse } from "@/methods/FormatResponse";
import { NextFunction, Request, Response } from "express";
import { User, userSchema } from "./../models/user";
import "dotenv/config";
import { FormatResponsePost } from "@/methods/FormatResponsePost";
import  JwtService  from "../services/JwtServices";
import ArgonService from "../services/ArgonService";

const jwtService = new JwtService();
const argonService = new ArgonService();

export default {
  /// Get all users.
  /// <returns>List of users.</returns>
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: typeof User[] = await User.find({}, "-password -__v");
      res.json(FormatResponse("GET ALL", users));
    } catch (error) {
      next(error);
    }
  },

  /// Get user by id.
  /// <returns>An user.</returns>
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findById({ _id: req.params.id });
      res.json(FormatResponse("GET BY ID", user));
    } catch (error) {
      next(error);
    }
  },

  /// Post user.
  /// <returns>User id.</returns>
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await userSchema.parseAsync(req.body);
      let user = await User.create({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      res.json(FormatResponsePost("CREATED", user.id));
    } catch (error) {
      next(error);
    }
  },

  /// Post method to log in user.
  ///<returns>Token.</returns>
  postLogin: async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email });
    try {
      if (!(argonService.verifyToken(user!.password, req.body.password))) {
        throw new Error("Failed");
      }
      let output = { token: jwtService.login(req.body.password, user) };
      res.json(FormatResponse("TOKEN", output));
    } catch (error) {
      next(error);
    }
  },

  /// Patch an user.
  /// <returns>User id.</returns>
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await User.findByIdAndUpdate(req.params.id, req.body);
      await user?.save;
      res.json(FormatResponse("UPDATED", user?.id));
    } catch (error) {
      next(error);
    }
  },

  /// Delete user by id.
  /// <returns>"DELETED".</returns>
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.json(FormatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
