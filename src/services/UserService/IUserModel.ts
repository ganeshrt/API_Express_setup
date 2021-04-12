export interface IUserModel {
    createUser(
        name: String,
        password: String,
        role: String,
    ): Promise<any>;
}