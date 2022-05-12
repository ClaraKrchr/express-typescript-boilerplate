export default interface IArgonService {
  verifyToken: (userPassword: string, bodyPassword: string) => Promise<boolean>;
}
