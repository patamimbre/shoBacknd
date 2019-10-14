import { Router } from 'express';

const router = Router();

// router.all('*', requireAuthentication)
router.get('/', (req, res, next) => {
  res.locals.data = { hello: 'world' };
  next();
});

export default router;
