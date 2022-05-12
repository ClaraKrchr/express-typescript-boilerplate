import IArgonService from "../interfaces/IArgonService";
import argon2 from "argon2";

class ArgonService implements IArgonService {
  public async verifyToken(userPassword: string, bodyPassword: string) {
    return await argon2.verify(userPassword, bodyPassword);
  }
}

export default ArgonService;