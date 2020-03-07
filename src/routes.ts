import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserControler from './app/controllers/UserControler';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth.middleware';
import fileController from './app/controllers/fileController';
import ProviderController from './app/controllers/ProviderController';

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}
const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserControler.store);

routes.put('/users', authMiddleware, UserControler.update);

routes.post('/sessions', SessionController.store);

routes.post('/files', authMiddleware, upload.single('file'), fileController.store);

routes.get('/providers',authMiddleware, ProviderController.index);

export default routes;
