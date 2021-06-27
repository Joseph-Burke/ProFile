import { Controller } from './controller';
import { User, Company, Address } from '../models';

export const usersController = new Controller(User);
export const companiesController = new Controller(Company);
export const addressesController = new Controller(Address);
