import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailuserController } from './controllers/user/DetailUserController';
import { CreateMetaController } from './controllers/meta/CreateMetaController';

const router = Router();

// Rotas existentes
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);

// Rota para adicionar uma meta
router.post('/metas', isAuthenticated, new CreateMetaController().handle);

export { router };
