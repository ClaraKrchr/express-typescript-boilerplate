import { model, Schema, Model, Document } from "mongoose";

enum ActuatorType {
  BLINDS,
  LIGHT,
}

interface Actuator extends Document {
  type: ActuatorType;
  designation: string;
  state: boolean;
}

const ActuatorSchema: Schema = new Schema({
  type: { type: Number, required: true, enum: [0, 1] },
  designation: { type: String, required: true },
  state: { type: Boolean, required: true },
});

ActuatorSchema.set('toJSON', { virtuals: true });

export const Actuator: Model<Actuator> = model("Actuator", ActuatorSchema);

type ActuatorPost = Omit<Actuator, "id">;
type ActuatorUpdate = Partial<ActuatorPost>;
