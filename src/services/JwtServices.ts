import  IJwtService  from '../interfaces/IJwtService';
import { EventEmitter } from "stream";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class JwtService extends EventEmitter implements IJwtService {
  hasher = argon2;

  constructor() {
    super();
  }

  public login(user: any){
    let token = process.env.SECRETKEY;
    return jwt.sign({ email: user?.email, username: user?.username, _id: user?.id }, token!);
  }

  public authenticate(token: string) {
    jwt.verify(token, process.env.SECRETKEY!, () => {
      return false;
    });
    return true;
  }
}

export default JwtService;