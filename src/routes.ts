import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailuserController } from './controllers/user/DetailUserController';
import { ChildController } from './controllers/user/child.controller';

const router = Router();

// Rotas de usuários
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);

// Rotas de criança
router.post('/children', isAuthenticated, ChildController.create);
router.get('/children', isAuthenticated, ChildController.getAll);
router.get('/children/:id', isAuthenticated, ChildController.getById);
router.put('/children/:id', isAuthenticated, ChildController.update);
router.delete('/children/:id', isAuthenticated, ChildController.delete);

export { router };