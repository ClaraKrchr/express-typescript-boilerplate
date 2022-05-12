export default interface IJwtService {
    login: (password: string, user: any) => Promise<string>;
    authenticate: (token: string) => boolean;
}