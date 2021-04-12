import { IUserModel } from './../services/UserService/IUserModel';
import mongoose from 'mongoose';
import User from './User/userModel'
export class BaseRepository {

    /**
     * insert
     */
    public insert(username: String, password: String, role: String) {

        const user = new User({ username, password, role });
        return user.save().then(res => {
            console.log("user inserted...!");
            return res;
        }).catch(err => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public find(username: String, password: String) {
        // const user = new User({ name, password });
        return User.findOne({ username, password }).then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }
}