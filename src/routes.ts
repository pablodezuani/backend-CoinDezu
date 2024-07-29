import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailuserController } from './controllers/user/DetailUserController';
import { CreateMetaController } from './controllers/meta/CreateMetaController';
import { GetMetasController } from './controllers/meta/GetMetasController'; 

const router = Router();


router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);

// Rota para adicionar uma metas
router.post('/metas', isAuthenticated, new CreateMetaController().handle);
router.get('/goals', isAuthenticated, new GetMetasController().handle); 
export { router };
