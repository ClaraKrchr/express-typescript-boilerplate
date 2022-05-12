export default interface IJwtService {
    login: (user: any)=> string;
    authenticate: (token: string) => boolean;
}