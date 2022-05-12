import { EventEmitter } from "stream";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class ArgonService extends EventEmitter implements IArgonService {
  hasher = argon2;

  constructor() {
    super();
  }

  public async login(password: string, user: any) {
    let token = "";
    if (await argon2.verify(user.password, password)) {
      const signature = process.env.SECRET_KEY;
      token = jwt.sign({ id: user._id }, signature!);
    }

    return token;
  }

  public authenticate(token: string) {
    jwt.verify(token, process.env.SECRET_KEY!, () => {
      return false;
    });
    return true;
  }
}

export default Authenticator;