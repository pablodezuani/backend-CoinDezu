import { CreateUserController } from './controllers/user/CreateUserController';
import { Router } from 'express';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailuserController } from './controllers/user/DetailUserController';
import { CreateMetaController } from './controllers/meta/CreateMetaController';
import { GetMetasController } from './controllers/meta/GetMetasController'; 
import { ConfirmationController } from '.././src/controllers/confirmation/ConfirmationController'; // Adicione esta linha


const router = Router();

// Rotas de usuários
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);

// Rotas de metas
router.post('/metas', isAuthenticated, new CreateMetaController().handle);
router.get('/goals', isAuthenticated, new GetMetasController().handle);

// Rota para confirmação de presença
router.post('/confirmar', new ConfirmationController().create); // Adicione esta linha

export { router };
