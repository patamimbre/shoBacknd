import { Router } from 'express';
import accountRoutes from './accounts';
import userRoutes from './users';
import { initLocals, customResponse } from './middleware';

const router = Router();

router.use(initLocals);

router.use('/account', accountRoutes);
router.use('/users', userRoutes);

router.use(customResponse);

export default router;
