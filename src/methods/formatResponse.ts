
type ApiResponse = {
    response: string
    data?: Record<string, any> | null
    error?: Error
}

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
