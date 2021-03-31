// const express = require('express');
import express from 'express'



export class Server {

    private app: express.Express;
    constructor() {
        this.app = express()
    }

    start = () => {
        const PORT = 8000;
        this.app.get('/health-check', (req: any, res: any) => res.status(200).send({ status: 200, message: "hello!" }));
        this.app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
        });
    }
}