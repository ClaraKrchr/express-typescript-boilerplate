import { model, Schema, Model, Document } from "mongoose";

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

// type UserGet = Omit<User, "password">
// type UserPost = Omit<User, "id">
// type UserUpdate = Partial<UserPost>
