import { model, Schema, Model, Document } from "mongoose";
import * as mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";
mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully connected to db.");
  }
});

interface User extends Document {
  email: string;
  password: string;
  username: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

const User: Model<User> = model("User", UserSchema);

type UserGet = Omit<User, "password">;
type UserPost = Omit<User, "id">;
type UserUpdate = Partial<UserPost>;
