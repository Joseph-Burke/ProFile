import express from 'express';

import {
  addressesController,
  companiesController,
  usersController,
} from '../controllers';
import { buildRestfulRouter } from './helpers';

const usersRouter = buildRestfulRouter(usersController);
const addressesRouter = buildRestfulRouter(addressesController);
const companiesRouter = buildRestfulRouter(companiesController);

const indexRouter = express.Router();
indexRouter.use('/users', usersRouter);
indexRouter.use('/addresses', addressesRouter);
indexRouter.use('/companies', companiesRouter);

export default indexRouter;
