import express from 'express';

import { 
  addressesController,
  companiesController,
  usersController 
} from '../controllers';

const indexRouter = express.Router();

const example = (req, res) => {
  const message = `${req.method} ${req.url}`
  res.status(200).send(message);
}

// GET
indexRouter.get('/users', usersController.index);
indexRouter.get('/users/:id', usersController.show);

indexRouter.get('/companies', companiesController.index);
indexRouter.get('/companies/:id', companiesController.show);

indexRouter.get('/addresses', addressesController.index);
indexRouter.get('/addresses/:id', addressesController.show);

// POST
indexRouter.post('/users', usersController.create);
indexRouter.post('/companies', companiesController.create);
indexRouter.post('/addresses', addressesController.create);

// PUT
indexRouter.put('/users/:id', usersController.update);
indexRouter.put('/addresses/:id', companiesController.update);
indexRouter.put('/companies/:id', addressesController.update);

// DELETE
indexRouter.delete('/users/:id', usersController.destroy)
indexRouter.delete('/addresses/:id', companiesController.destroy);
indexRouter.delete('/companies/:id', addressesController.destroy);

export default indexRouter;
