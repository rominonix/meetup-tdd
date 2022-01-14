import User from "./user";
import Event from "./event";
import { Model, DataTypes, Optional } from "sequelize";
import db from "../connection";

interface EventuserAttributes {
  EventId: string;
  UserId: string;
}

export interface EventuserCreationAttributes
  extends Optional<EventuserAttributes, "EventId"> {}

class Eventuser
  extends Model<EventuserAttributes, EventuserCreationAttributes>
  implements EventuserAttributes
{
  public EventId!: string;
  public UserId!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Eventuser.init(
  {
    EventId: {
      type: DataTypes.STRING,
      references: {
        model: Event,
        key: "id",
      },
      onDelete: 'cascade',
      allowNull: false,
    },
    UserId: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "id",
      },
      onDelete: 'cascade',
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: true,
  }
);

export default Eventuser;
