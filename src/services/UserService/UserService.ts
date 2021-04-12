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
    public createUser = async (username: String, password: String, role: String): Promise<any> => {


        logger("User service - createUser :::::", { username, password, role });
        return this.baseRepo.insert(username, password, role);

    }

    /**
     * getUser
     */
    public getUser = async (username: String, password: String): Promise<any> => {

        logger("User Service -getUser::::: ", process.env.SECRET_KEY);
        try {

            const user: any = await this.baseRepo.find(username, password);
            if (user) {
                // Generate an access token
                const accessToken = jwt.sign({ username: user.username, role: user.role }, process.env.SECRET_KEY);

                return ({
                    accessToken
                });
            } else {
                return ({ message: 'Username or password incorrect', status: 404 });
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }

    }


}
export const userService = UserService.getInstance()