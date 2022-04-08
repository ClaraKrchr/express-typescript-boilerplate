import { model, Schema, Model, Document } from "mongoose";

enum SensorType {
    TEMPERATURE = "TEMPERATURE",
    HUMIDITY = "HUMIDITY",
    BARO = "BARO",
    PROXIMITY = "PROXIMITY"
}

interface Sensor extends Document {
    type: SensorType
    designation : string
    rawValue: number | boolean
}

const SensorSchema: Schema = new Schema ({
    type: { type: String, required: true, enum: ["TEMPERATURE", "HUMIDITY", "BARO", "PROXIMITY"] },
    designation : { type: String, required: true },
    rawValue: { type: Number, required: true },
});

SensorSchema.set('toJSON', { virtuals: true });

export const Sensor: Model<Sensor> = model("Sensor", SensorSchema);

type SensorGet = Sensor & {value: string}
type SensorPost = Omit<Sensor, "id">
type SensorUpdate = Partial<SensorPost>