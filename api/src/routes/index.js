import express from 'express';
import { addressesController, companiesController, usersController } from '../controllers';

const indexRouter = express.Router();

const example = (req, res) => {
  const message = `${req.method} ${req.url}`
  res.status(200).send(message);
}

// GET
indexRouter.get('/users', example);
indexRouter.get('/users/:id', example)

indexRouter.get('/companies', example);
indexRouter.get('/companies/:id', example);

indexRouter.get('/addresses', example);
indexRouter.get('/addresses/:id', example);

// POST
indexRouter.post('/users', example);
indexRouter.post('/companies', example);
indexRouter.post('/addresses', example);

// PUT
indexRouter.put('/users/:id', example)
indexRouter.put('/addresses/:id', example);
indexRouter.put('/companies/:id', example);

// DELETE
indexRouter.delete('/users/:id', example)
indexRouter.delete('/addresses/:id', example);
indexRouter.delete('/companies/:id', example);

export default indexRouter;
