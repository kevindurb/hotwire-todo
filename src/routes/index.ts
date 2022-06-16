import { Router } from 'express';
import { router as todoRoutes } from './todoRoutes';
import * as routingUtils from '../utils/routing';

export const router = Router();

router.get('/', routingUtils.redirectTo('/todos'));

router.use('/todos', todoRoutes);
