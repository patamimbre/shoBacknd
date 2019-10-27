import { Router } from 'express';
import accountRoutes from './accounts';
import userRoutes from './users';
import { initLocals, customResponse, resMethodsOverride } from './middleware';

const router = Router();

router.use(resMethodsOverride);
router.use(initLocals);

router.use('/account', accountRoutes);
router.use('/users', userRoutes);

router.use(customResponse);

export default router;
