import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

/// The middleware to connect the db.
export const connectDb = (req: Request, res: Response, next: NextFunction) => {
  const uri: string = "mongodb://127.0.0.1:27017/local";
  mongoose.connect(uri, (err: any) => {
    if (err) {
      console.log(err.message);
      next(err);
    } else {
      console.log("Successfully connected to db.");
      next();
    }
  });
};
