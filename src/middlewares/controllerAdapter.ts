import { logger } from './../lib/logger';
import { NextFunction, Request, Response } from "express"

export default function controllerAdapter(controller: any = null, functionName: string = "") {

    return async (req: Request, res: Response, next: NextFunction) => {
        const { params, headers, body, query } = req;
        logger("body", params)
        try {
            const result = await controller[functionName]({ params, headers, body, query })
            logger("result", result)
            res.status(200).json(result)
        } catch (e) {
            const status = e.status || 500;
            res.status(status).json(e);
        }
    }

}