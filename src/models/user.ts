type User = {
    id: number | string
    email: string
    password: string
    username: string
}

// type UserGet = Omit<User, "password">
// type UserPost = Omit<User, "id">
// type UserUpdate = Partial<UserPost>