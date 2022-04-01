import { NextFunction, Request, Response } from "express";
import { decode, Algorithm } from "jsonwebtoken";

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const algorithm: Algorithm = "HS512";
    
    try {
        decode(token, options);
    } catch (error){

    }
}