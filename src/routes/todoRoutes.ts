import { Router } from 'express';
import { todoController } from '../controllers/todoController';

export const router = Router();

router.get('/', todoController.getList);
