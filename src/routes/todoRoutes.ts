import { Router } from 'express';
import * as routingUtils from '../utils/routing';
import * as todoController from '../controllers/todoController';

export const router = Router();

router.get('/', routingUtils.asyncHandler(todoController.getList));
