/// Api front resonse type for post method.
type ApiResponse = {
    response: string
    id: number
    error?: Error
}

/// Format the response to adapt it to the front-end in post method.
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
