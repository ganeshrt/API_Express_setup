import { userService } from './../../services/UserService/UserService';
import { logger } from '../../lib/logger';
class UserController {
    // constructor() {

    // }

    /**
     * static getInstance
     */
    public static getInstance() {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    private static instance: UserController;
    /**
     * createUser
     */
    public createUser = async ({ params, headers, body }: any) => {
        const { username, password, role } = body;
        logger("User Controller -Create User :::::::::", body)
        return await userService.createUser(username, password, role);
    }

    public getUser = async ({ params, headers, body }: any) => {
        const { username, password } = body;
        logger("User Controller - get User ::::", body)
        return await userService.getUser(username, password);

    }
}

export default UserController.getInstance();