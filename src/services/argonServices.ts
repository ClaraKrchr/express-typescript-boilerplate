import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"

export function signin_oauth(email : string, _id : string)
{
    return jwt.sign(
      { user_id: _id, email },
      process.env.SECRET_KEY!,
      {
        expiresIn: "2h",
      }
    );
}

export const oauth_verif = (req: Request, res: Response, next: NextFunction) =>
{
    try {
        const token = req.headers[("authorization")]!.split(" ");
        jwt.verify(token[1], process.env.SECRET_KEY!);
    } catch (error) {
        next(error);
    }
    next();
}