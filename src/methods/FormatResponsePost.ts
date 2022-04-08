
type ApiResponse = {
    response: string
    id: number
    error?: Error
}

export function FormatResponsePost(
    response: string,
    id: number,
    error?: Error) {
    const value: ApiResponse = {
        response: response,
        id: id,
        error: error
    };
    return value;

}
