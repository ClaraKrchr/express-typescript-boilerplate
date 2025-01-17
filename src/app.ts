import { NextFunction, Request, Response } from "express";
import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import {connectDb} from './middlewares/connectDb';

// Routers
import indexRouter from "@/routes/Index";
import userRouter from "@/routes/User";
import sensorRouter from "@/routes/Sensor";
import actuatorRouter from "@/routes/Actuator";
import cors from "cors";
import { emitter } from "./services/EventEmitter";
import { TheMailer } from "./services/Mailer";
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(logger("dev"));
app.use(connectDb);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/sensor", sensorRouter);
app.use("/actuator", actuatorRouter);

// catch 404
app.use(function (req: Request, res: Response, next: NextFunction) {
  // handle it how it pleases you
  res.status(404).json({ message: "not_found" });
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

const mailer = new TheMailer();
emitter.on('foo.message', (msg) => {
  mailer.eventToMail(msg);
})

 

export default app;
