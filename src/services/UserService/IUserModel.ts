export interface IUserModel {
    createUser(
        name: String,
        password: String,
        role: String,
        authHeader: any
    ): Promise<any>;
}