import { NextFunction, Request, Response } from "express";
import { Sensor } from "./../models/sensor";
import { FormatResponse } from "./../methods/FormatResponse";
import { Event } from "../services/EventEmitter";
/// Function in order to parse sensors values.
///<returns>The value parsed.</returns>

const event = new Event;

function parseValue(sensorType: string, rawValue: number | boolean): string {
  let returnValue = "";
  if (typeof rawValue == "number") {
    switch (sensorType) {
      case "TEMPERATURE":
        returnValue = ((75 * rawValue) / 1023 - 20).toFixed() + "°C";
        if (rawValue > 50){
          //emitMail("La température dépasse les 50°, elle est actuellement à :" + returnValue);
        }
        break;
      case "HUMIDITY":
        returnValue = ((100 * rawValue) / 1023).toFixed() + "%HR";
        if (rawValue > 110){
          //emitMail("L'humidité dépasse les 110%, elle est actuellement à :" + returnValue);
        }
        break;
      case "BARO":
        returnValue = ((200 * rawValue) / 1023).toFixed() + "hPA";
        if (rawValue > 1000){
          //emitMail("La pression dépasse les 1000hpa, elle est actuellement à :" + returnValue);
        }
        break;
      default:
        break;
    }
  } else {
    rawValue ? (returnValue = "Actif") : (returnValue = "Inactif");
  }

  return returnValue;
}

function emitMail(message: string) {
  event.emitNewSensor(message);
}

export default {
  /// Get all sensors.
  /// <returns>List of sensors.</returns>
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

  /// Get sensor by id.
  /// <returns>A sensor.</returns>
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findById({ _id: req.params.id });
      res.json(FormatResponse("GET BY ID", sensor));
    } catch (error) {
      next(error);
    }
  },

  /// Post sensor.
  /// <returns>Sensor id.</returns>
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.create(req.body);
      res.json(FormatResponse("CREATED", sensor.id));
      emitMail("Nouveau sensor créé : ");
    } catch (error) {
      next(error);
    }
  },

  /// Patch a sensor.
  /// <returns>Sensor id.</returns>
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body);
      res.json(FormatResponse("UPDATED", sensor?.id));
    } catch (error) {
      next(error);
    }
  },

  /// Delete sensor by id.
  /// <returns>"DELETED".</returns>
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
