import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { Address } from './address';
import { Company } from './company';

export class User extends Model {}
User.init(
  {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    contactNumber: { type: DataTypes.STRING },
    registerDate: { type: DataTypes.STRING },
    billingAddress: {
      type: DataTypes.INTEGER,
      references: {
        model: Address,
        key: 'id',
      },
      company: {
        type: DataTypes.INTEGER,
        references: {
          model: Company,
          key: 'id',
        },
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);
