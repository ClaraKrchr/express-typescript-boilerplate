import { NextFunction, Request, Response } from "express";

export default {
  // get default
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "salut val" });
      return;
    } catch (error) {
      next(error);
    }
  },

  // ---- USER ---- //
  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: User[] = [] ;

      res.json({ users });
      return;
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: User;
      res.json({ user });
      return;
    } catch (error) {
      next(error);
    }
  },

  postUser: async (user: User, res: Response, next: NextFunction) => {
    try {
      const userToCreate: User = user;
      res.json({ userToCreate});
      return;
    } catch (error) {
      next(error);
    }
  },

  patchUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json("User updated.");
      return;
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async(req: Request, res: Response, next: NextFunction) => {
    try {
      // const id: number = req.params.id;
      res.json({message: "User deleted."});
      return;
    } catch (error) {
      next(error);
    }
  },


  // ---- ACTUATOR ---- //
  getAllActuators: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuators: Actuator[] = [] ;

      res.json({ actuators });
      return;
    } catch (error) {
      next(error);
    }
  },

  getActuatorById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator: Actuator;
      res.json({ actuator });
      return;
    } catch (error) {
      next(error);
    }
  },

  postActuator: async (actuator: Actuator, res: Response, next: NextFunction) => {
    try {
      const actuatorToCreate: Actuator = actuator;
      res.json({ actuatorToCreate});
      return;
    } catch (error) {
      next(error);
    }
  },

  patchActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json("Actuator updated.");
      return;
    } catch (error) {
      next(error);
    }
  },

  deleteActuator: async(req: Request, res: Response, next: NextFunction) => {
    try {
      // const id: number = req.params.id;
      res.json({message: "Actuator deleted."});
      return;
    } catch (error) {
      next(error);
    }
  },


    // ---- SENSOR ---- //
    getAllSensors: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const sensors: Sensor[] = [] ;
  
        res.json({ sensors });
        return;
      } catch (error) {
        next(error);
      }
    },
  
    getSensorById: async (req: Request, res: Response, next: NextFunction) => {
      try {
        const sensor: Sensor;
        res.json({ sensor });
        return;
      } catch (error) {
        next(error);
      }
    },
  
    postSensor: async (sensor: Sensor, res: Response, next: NextFunction) => {
      try {
        const sensorToCreate: Sensor = sensor;
        res.json({ sensorToCreate});
        return;
      } catch (error) {
        next(error);
      }
    },
  
    patchSensor: async (req: Request, res: Response, next: NextFunction) => {
      try {
        res.json("Sensor updated.");
        return;
      } catch (error) {
        next(error);
      }
    },
  
    deleteSensor: async(req: Request, res: Response, next: NextFunction) => {
      try {
        // const id: number = req.params.id;
        res.json({message: "Sensor deleted."});
        return;
      } catch (error) {
        next(error);
      }
    },
};
