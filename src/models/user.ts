import { model, Schema, Model, Document } from "mongoose";
import z  from "zod";
import argon2 from "argon2";
import xss from "xss";

// interface User extends Document {
//   email: string;
//   password: string;
//   username: string;
// }

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().transform((arg) => argon2.hash(arg)),
  username: z.string(),//.transform((arg) => xss(arg)),
})

type User = z.infer<typeof userSchema>;

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

UserSchema.set('toJSON', { virtuals: true });

export const User: Model<User> = model("User", UserSchema);

type UserGet = Omit<User, "password">;
type UserPost = Omit<User, "id">;
type UserUpdate = Partial<UserPost>;

