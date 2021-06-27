import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';

export class Company extends Model {}
Company.init(
  {
    website: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'Company',
  }
);
