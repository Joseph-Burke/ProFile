import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';

export class Address extends Model {}
Address.init(
  {
    street: { type: DataTypes.STRING },
    suburb: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postcode: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'Address',
  }
);
