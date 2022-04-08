
type ApiResponse = {
    response: string
    data?: Record<string, any> | null
    error?: Error
}
//coucou la bite du cul
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
