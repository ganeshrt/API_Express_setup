import { logger } from './../../lib/logger';
import { Router } from "express";
import { checkSchema } from 'express-validator/check'
import userController from './UserController'
import controllerAdapter from '../../middlewares/controllerAdapter';
import validation from './validation'
const router = Router();
router.post('/', checkSchema(validation.user.post as any), controllerAdapter(userController, "createUser"))

router.get('/login', checkSchema(validation.user.post as any), controllerAdapter(userController, "getUser"))
export default router;