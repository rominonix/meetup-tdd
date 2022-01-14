import {
  Model,
  DataTypes,
  BelongsToManyAddAssociationsMixin,
  Optional,
} from "sequelize";
import db from "../connection";
import Event from "../models/event";


interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  eventAttend: string[] | null;
  eventAttended: string[] | null;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'eventAttend' | 'eventAttended'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public eventAttend!: string[] | null;
  public eventAttended!: string[] | null;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public addEvent!: BelongsToManyAddAssociationsMixin<Event, string>;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventAttend: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    eventAttended: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: false,
  }
);

export default User;
