import { model, Schema, Model, Document } from "mongoose";

enum SensorType{
    TEMPERATURE,
    HUMIDITY,
    BARO,
    PROXIMITY
}

interface Sensor extends Document {
    type: SensorType
    designation : string
    rawValue: number | boolean
}

const SensorSchema: Schema = new Schema ({
    type: { type: SensorType, required: true },
    designation : { type: String, required: true },
    rawValue: { type: Number, required: true },
});

const Sensor: Model<Sensor> = model("Sensor", SensorSchema);

type SensorGet = Sensor & {value: string}
type SensorPost = Omit<Sensor, "id">
type SensorUpdate = Partial<SensorPost>