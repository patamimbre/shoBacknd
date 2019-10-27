import { Router } from 'express';

const router = Router();

// router.all('*', requireAuthentication)
router.get('/', (req, res, next) => {
  res.setResponse(202, 'WORKING?', { ule: 12 });
  next();
});

router.get('/:id', (req, res, next) => {
  res.locals.data = { action: 'get' };
  next();
});

router.post('/', (req, res, next) => {
  res.locals.data = { action: 'create' };
  next();
});

router.put('/', (req, res, next) => {
  res.locals.data = { action: 'update' };
  next();
});


export default router;
