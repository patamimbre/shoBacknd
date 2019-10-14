import { Router } from 'express';
import accountRoutes from './accounts';
import userRoutes from './users';

const router = Router();

// locals middleware
router.use((req, res, next) => {
  Object.assign(res, {
    locals: {
      data: {},
      status: 200,
      message: 'success',
    },
  });
  next();
});


router.use('/account', accountRoutes);
router.use('/users', userRoutes);

// response middleware
router.use((req, res) => {
  const { locals } = res;
  return res.status(locals.status).send(locals);
});

export default router;
