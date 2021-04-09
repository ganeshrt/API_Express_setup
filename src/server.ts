import { Database } from './services/Database';
// const express = require('express');
import bodyParser from 'body-parser';
import express from 'express'
import userRouter from './contollers/User/router'
require('dotenv').config()

export class Server {

    private app: express.Express;
    constructor() {
        this.app = express()
    }

    init = () => {
        Database.open(process.env.MONGODB_URL);
        this.initJsonParser();
    }
    initJsonParser = () => {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }
    start = () => {
        const PORT = 8000;
        this.app.get('/health-check', (req: any, res: any) => res.status(200).send({ status: 200, message: "hello!" }));
        this.app.use("/user", userRouter)
        this.app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
        });
    }
}
