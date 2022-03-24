enum ActuatorType{
    BLINDS,
    LIGHT
}

type Actuator = {
    id: number | string
    type: ActuatorType
    designation: string
    state: boolean
}

// type ActuatorPost = Omit<Actuator, "id">
// type ActuatorUpdate = Partial<ActuatorPost>