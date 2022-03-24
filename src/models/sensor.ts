enum SensorType{
    TEMPERATURE,
    HUMIDITY,
    BARO,
    PROXIMITY
}

type Sensor = {
    id: number | string
    type: SensorType
    designation : string
    rawValue: number | boolean
}

// type SensorGet = Sensor & {value: string}
// type SensorPost = Omit<Sensor, "id">
// type SensorUpdate = Partial<SensorPost>