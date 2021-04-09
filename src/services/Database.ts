import { logger } from './../lib/logger';
import mongoose from 'mongoose'
import { constants } from 'node:buffer';
export class Database {
    /**
     * open
     */
    public static open(dbUrl: any) {

        return new Promise((resolve, rejects) => {

            mongoose.connect(dbUrl, { bufferMaxEntries: 0, autoIndex: true, keepAlive: 1, poolSize: 10, reconnectInterval: 500, useNewUrlParser: true } as any)
            // .then((result: any) => {
            //     logger("Database connected succesfully", result)
            // }).catch((err: any) => {
            //     logger("Database service -connecting to mongodb ", err);
            // });
            mongoose.connection.on("error", (err) => {
                logger("Database service -connecting to mongodb ", err);
            })
            mongoose.connection.on("connected", res => {
                logger("Database connected successfully", res)

            })
        })
    }
    /**
     * close
     */
    public static close() {
        mongoose.disconnect();
    }

}