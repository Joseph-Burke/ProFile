import express from 'express';

export const buildRestfulRouter = (controller) => {
  const router = express.Router();
  router.get('/', controller.index);
  router.get('/:id', controller.show);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.destroy);

  return router;
};
