import express from 'express';

import {
  addressesController,
  companiesController,
  usersController,
} from '../controllers';

const indexRouter = express.Router();

const usersRouter = express.Router();
usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.show);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.destroy);

const addressesRouter = express.Router();
addressesRouter.get('/', addressesController.index);
addressesRouter.get('/:id', addressesController.show);
addressesRouter.post('/', addressesController.create);
addressesRouter.put('/:id', addressesController.update);
addressesRouter.delete('/:id', addressesController.destroy);

const companiesRouter = express.Router();
companiesRouter.get('/', companiesController.index);
companiesRouter.get('/:id', companiesController.show);
companiesRouter.post('/', companiesController.create);
companiesRouter.put('/:id', companiesController.update);
companiesRouter.delete('/:id', companiesController.destroy);

indexRouter.use('/users', usersRouter);
indexRouter.use('/addresses', addressesRouter);
indexRouter.use('/companies', companiesRouter);

export default indexRouter;
