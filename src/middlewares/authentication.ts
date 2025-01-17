import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

/// The authentication middleware with the header request.
export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const secretToken = process.env.SECRETKEY;
        jwt.verify(token, secretToken!, (err, user) => {
            if (err) next(err);
            next();
        });
    }
    else { res.status(401).json({ error: new Error('Invalid request!') }); }

};

