/// Api front resonse type.
type ApiResponse = {
    response: string
    data?: Record<string, any> | null
    error?: Error
}

/// Format the response to adapt it to the front-end.
export function FormatResponse(
    response: string,
    data?: Record<string, any> | null,
    error?: Error) {
    const value: ApiResponse = {
        response: response,
        data: data,
        error: error
    };
    return value;

}
