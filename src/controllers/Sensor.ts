import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";
import { FormatResponse } from "./../methods/FormatResponse";

function parseValue(sensorType: string, rawValue: number | boolean): string {
  let returnValue = "";
  if (typeof rawValue == "number") {
    switch (sensorType) {
      case "TEMPERATURE":
        returnValue = (((75 * rawValue) / 1023) - 20).toFixed() + "°C";
        break;
      case "HUMIDITY":
        returnValue = ((100 * rawValue) / 1023).toFixed() + "%HR";
        break;
      case "BARO":
        returnValue = ((200 * rawValue) / 1023).toFixed() + "hPA";
        break;
      default: break;
    }
  } else {
    rawValue ? returnValue = "Actif" : returnValue = "Inactif";
  }

  return returnValue;
}

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors = await Sensor.find({});
      const newSensors = sensors.map((sensor) => {
        return {
          id: sensor.id,
          type: sensor.type,
          rawValue: sensor.rawValue,
          designation: sensor.designation,
          value: parseValue(sensor.type, sensor.rawValue),
        };
      });
      res.json(FormatResponse("GET ALL", newSensors));
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findById({ _id: req.params.id });
      res.json(FormatResponse("GET BY ID", sensor));
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.create(req.body);
      res.json(FormatResponse("CREATED", sensor.id));
    } catch (error) {
      next(error);
    }
  },

  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body);
      res.json(FormatResponse("UPDATED", sensor?.id));
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.deleteOne({ _id: req.params.id });
      res.json(FormatResponse("DELETED"));
      return;
    } catch (error) {
      next(error);
    }
  },
};
