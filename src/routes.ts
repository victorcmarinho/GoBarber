import { Router } from 'express';
import UserControler from './app/controllers/UserControler';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth.middleware';

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}
const routes = Router();

routes.post('/users', UserControler.store);

routes.put('/users', authMiddleware, UserControler.update);

routes.post('/sessions', SessionController.store);

export default routes;
