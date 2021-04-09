import { BaseRepository } from './../../repositories/BaseRepository';
import { logger } from './../../lib/logger';
import { IUserModel } from './IUserModel';
import jwt from 'jsonwebtoken'
require('dotenv').config()
export class UserService implements IUserModel {
    private baseRepo = new BaseRepository();

    public static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    private static instance: UserService;
    /**
     * createUser =
       =>*/
    public createUser = async (username: String, password: String, role: String, authHeader: any): Promise<any> => {

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, process.env.SECRET_KEY, (err: any, user: any) => {
                if (err) {
                    console.log("token err.", err);
                    return { status: 403 };
                }
                console.log("userr....", user)
            });
        } else {
            return { status: 401 }
        }
        logger("name", username);
        return this.baseRepo.insert(username, password, role);

        // return {
        //     id: "GAPP0001",
        //     msg: `${name} user created...!`
        // }
    }

    /**
     * getUser
     */
    public getUser = async (username: String, password: String): Promise<any> => {

        logger("getUser ", process.env.SECRET_KEY);
        const user: any = await this.baseRepo.find(username, password);
        console.log("user :", user)
        if (user) {
            // Generate an access token
            const accessToken = jwt.sign({ username: user[0].username, role: user[0].role }, process.env.SECRET_KEY);

            return ({
                accessToken
            });
        } else {
            return ({ message: 'Username or password incorrect', status: 404 });
        }

    }


}
export const userService = UserService.getInstance()